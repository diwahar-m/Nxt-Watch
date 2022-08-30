import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiPlayListAddLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  Con,
  LoaderContainer,
  Con1,
  Left,
  Row22,
  Right,
  Row,
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
import GameItem from '../GameItem'
import CartContext from '../../context/CartContext'

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

  retying = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiConstants: apiConstant.loader})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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

        viewCount: each.view_count,
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

  renderingFailure = () => (
    <FailureCon>
      <Image4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops!Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request
      </FailurePara>
      <FailurePara>Please try again.</FailurePara>
      <FailureButton type="button" onClick={this.retrying}>
        Retry
      </FailureButton>
    </FailureCon>
  )

  renderingSuccess = () => {
    const {lists} = this.state
    const len = lists.length > 0

    return len ? (
      <Line33>
        {lists.map(each => (
          <GameItem details={each} key={each.id} />
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
        <ConButton onClick={this.retrying}>Retry</ConButton>
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
              <Headers />
              <Con1 data-testid="gaming" darker={dark}>
                <Left>
                  <Cover1>
                    <Link to="/">
                      <Row>
                        <AiOutlineHome size="24" />

                        <Head1>Home</Head1>
                      </Row>
                    </Link>

                    <Link to="/trending">
                      <Row>
                        <HiTrendingUp size="24" />

                        <Head1>Trending</Head1>
                      </Row>
                    </Link>
                    <Link to="/gaming">
                      <Row22>
                        <AiOutlineHome size="24" />

                        <Head1>Gaming</Head1>
                      </Row22>
                    </Link>
                    <Link to="/saved-videos">
                      <Row>
                        <RiPlayListAddLine size="24" />

                        <Head1>Saved videos</Head1>
                      </Row>
                    </Link>
                  </Cover1>
                  <Cover2>
                    <ConPara>CONTACT US</ConPara>
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
                      Enjoy! Now to see your <br />
                      channels and <br /> recommendations!
                    </ConPara>
                  </Cover2>
                </Left>
                <Right>
                  <Line2 data-testid="banner">
                    <HiTrendingUp />
                    <Head2>Gaming</Head2>
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
