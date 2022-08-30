import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiPlayListAddLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import {
  Con,
  LoaderContainer,
  Con1,
  Left,
  Row22,
  Right,
  Para7,
  Row,
  Cons,
  Cover1,
  Cover2,
  Head1,
  Image4,
  Row2,
  Head2,
  Line2,
  Line3,
  Line33,
  FailureCon,
  FailureHead,
  FailurePara,
  FailureButton,
  Container,
  Image5,
  RowImage,
  ConHead,
  ConPara,
  ConButton,
} from './styledComponents'
import Headers from '../Headers'
import TrendingItem from '../TrendingItem'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class Home extends Component {
  state = {apiConstants: apiConstant.initial, lists: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiConstants: apiConstant.loader})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken} `,
      },
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      const data = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({apiConstants: apiConstant.success, lists: data})
    } else {
      this.setState({apiConstants: apiConstant.failure})
    }
  }

  renderingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  retrying = () => {
    this.getVideos()
  }

  renderingFailure = () => (
    <FailureCon>
      <Image4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request
      </FailurePara>
      <FailurePara>Please try again.</FailurePara>
      <FailureButton onClick={this.retrying}>Retry</FailureButton>
    </FailureCon>
  )

  renderingSuccess = () => {
    const {lists} = this.state
    const len = lists.length > 0

    return len ? (
      <Line33>
        {lists.map(each => (
          <TrendingItem details={each} key={each.id} />
        ))}
      </Line33>
    ) : (
      <Container>
        <Image5
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt="no videos"
        />
        <ConHead>No Search results found</ConHead>
        <ConPara>Try different keywords or remove search filter</ConPara>
        <ConButton type="button" onClick={this.retrying}>
          Retry
        </ConButton>
      </Container>
    )
  }

  renderingFinal = apiConstants => {
    switch (apiConstants) {
      case apiConstant.loader:
        return this.renderingLoader()
      case apiConstant.success:
        return this.renderingSuccess()
      case apiConstant.failure:
        return this.renderingFailure()
      default:
        return null
    }
  }

  render() {
    const {apiConstants} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <Con>
              <Cons>
                <Headers />
              </Cons>

              <Con1 darker={dark} data-testid="trending">
                <Left darker={dark}>
                  <Cover1>
                    <Link to="/">
                      <Row>
                        <AiOutlineHome size="24" />

                        <Head1>Home</Head1>
                      </Row>
                    </Link>

                    <Link to="/trending">
                      <Row22>
                        <HiTrendingUp color="red" size="24" />

                        <Head1>Trending</Head1>
                      </Row22>
                    </Link>
                    <Link to="/gaming">
                      <Row>
                        <AiOutlineHome size="24" />

                        <Head1>Gaming</Head1>
                      </Row>
                    </Link>
                    <Link to="/saved-videos">
                      <Row>
                        <RiPlayListAddLine size="24" />

                        <Head1>Saved videos</Head1>
                      </Row>
                    </Link>
                  </Cover1>
                  <Cover2>
                    <Para7>CONTACT US</Para7>
                    <Row2>
                      <RowImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <RowImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <RowImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </Row2>
                    <ConPara>
                      Enjoy! Now to see your channels and recommendations!
                    </ConPara>
                  </Cover2>
                </Left>
                <Right darker={dark}>
                  <Line2 data-testid="banner">
                    <HiTrendingUp color="red" />
                    <Head2>Trending</Head2>
                  </Line2>
                  <Line3>{this.renderingFinal(apiConstants)}</Line3>
                </Right>
              </Con1>
            </Con>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Home
