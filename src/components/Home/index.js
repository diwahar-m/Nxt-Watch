import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiPlayListAddLine, RiCloseFill} from 'react-icons/ri'

import {AiOutlineHome} from 'react-icons/ai'
import {HiTrendingUp, HiSearch} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import CartContext from '../../context/CartContext'

import {
  Con,
  LoaderContainer,
  Con1,
  Line11,
  Button6,
  Left,
  Right,
  Row,
  Row22,
  Cover1,
  Cover2,
  Head1,
  Image4,
  Row2,
  Line1,
  Line2,
  Cons,
  Input1,
  Button2,
  Para67,
  Line3,
  Line33,
  Image1,
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
import IndividualItem from '../IndividualItem'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class Home extends Component {
  state = {
    apiConstants: apiConstant.initial,
    lists: [],

    user: '',
    close: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {user} = this.state
    this.setState({apiConstants: apiConstant.loader})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${user}`
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
          <IndividualItem details={each} key={each.id} />
        ))}
      </Line33>
    ) : (
      <Container>
        <Image5
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt="no videos"
        />
        <ConHead>No Search results found</ConHead>
        <ConPara>Try different key words or remove search filter</ConPara>
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

  closingNow = () => {
    this.setState({close: true})
  }

  userInput = event => {
    this.setState({user: event.target.value})
  }

  buttonClick = () => {
    this.getVideos()
  }

  render() {
    const {apiConstants, close, user1} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <Con>
              <Cons>
                <Headers />
              </Cons>

              <Con1 data-testid="home" darker={dark}>
                <Left darker={dark}>
                  <Cover1>
                    <Link to="/">
                      <Row22>
                        <AiOutlineHome size="24" color="red" />

                        <Head1>Home</Head1>
                      </Row22>
                    </Link>

                    <Link to="/trending">
                      <Row>
                        <HiTrendingUp size="24" />

                        <Head1>Trending</Head1>
                      </Row>
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
                    <Para67>CONTACT US</Para67>
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
                    <Para67>
                      Enjoy! Now to see your <br />
                      channels and <br />
                      recommendations!
                    </Para67>
                  </Cover2>
                </Left>
                <Right darker={dark}>
                  <Line1 toClose={close} data-testid="banner">
                    <Line11>
                      <Image1
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Button2
                        data-testid="close"
                        type="button"
                        onClick={this.closingNow}
                      >
                        <RiCloseFill />
                      </Button2>
                    </Line11>

                    <Para67>Buy Nxt Watch Premium</Para67>
                    <Button6>GET IT NOW</Button6>
                  </Line1>
                  <Line2>
                    <Input1
                      type="search"
                      value={user1}
                      placeholder="Search"
                      onChange={this.userInput}
                    />
                    <Button2
                      type="button"
                      onClick={this.buttonClick}
                      data-testid="searchButton"
                    >
                      <HiSearch />
                    </Button2>
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
