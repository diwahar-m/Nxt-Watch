import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiPlayListAddLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import CartContext from '../../context/CartContext'
import {
  Con,
  LoaderContainer,
  Con1,
  Row22,
  Left,
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
  Para6,
  ConHead,
  ConPara,
} from './styledComponent'
import Headers from '../Headers'
import SavedItem from '../SavedItem'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class SavedVideos extends Component {
  state = {apiConstants: apiConstant.success}

  renderingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderingFailure = () => (
    <FailureCon>
      <Image4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request
      </FailurePara>
      <FailurePara>Please try again.</FailurePara>
      <FailureButton>Retry</FailureButton>
    </FailureCon>
  )

  renderingSuccess = () => (
    <CartContext.Consumer>
      {value => {
        const {list, dark} = value
        const len = list.length > 0

        return len ? (
          <Line33 data-testid="savedVideos" darker={dark}>
            {list.map(each => (
              <SavedItem details={each} key={each.id} />
            ))}
          </Line33>
        ) : (
          <Container>
            <Image5
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <ConHead>No saved videos found</ConHead>
            <ConPara>You can save your videos while watching them</ConPara>
          </Container>
        )
      }}
    </CartContext.Consumer>
  )

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
      <Con>
        <Headers />
        <Con1>
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
                <Row>
                  <AiOutlineHome size="24" />

                  <Head1>Gaming</Head1>
                </Row>
              </Link>
              <Link to="/saved-videos">
                <Row22>
                  <RiPlayListAddLine color="red" size="24" />

                  <Head1>Saved videos</Head1>
                </Row22>
              </Link>
            </Cover1>
            <Cover2>
              <Para6>CONTACT US</Para6>
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
              <Para6>
                Enjoy! Now to see your <br />
                channels and <br /> recommendations!
              </Para6>
            </Cover2>
          </Left>
          <Right>
            <Line2 data-testid="banner">
              <HiTrendingUp color="red" />
              <Head2>Saved Videos</Head2>
            </Line2>
            <Line3>{this.renderingFinal(apiConstants)}</Line3>
          </Right>
        </Con1>
      </Con>
    )
  }
}

export default SavedVideos
