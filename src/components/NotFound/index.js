import {Component} from 'react'
import {Link} from 'react-router-dom'
import {RiPlayListAddLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'

import {
  Con,
  Con1,
  Left,
  Right,
  Row,
  Cover1,
  Cover2,
  Head1,
  Image4,
  Row2,
  Line3,
  FailureCon,
  FailureHead,
  FailurePara,
  RowImage,
} from './styledComponent'
import Headers from '../Headers'
import CartContext from '../../context/CartContext'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class NotFound extends Component {
  state = {apiConstants: apiConstant.success}

  renderingSuccess = () => (
    <FailureCon>
      <Image4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <FailureHead>Page Not Found</FailureHead>
      <FailurePara>
        we are sorry,the page you requested could not be found.
      </FailurePara>
    </FailureCon>
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
      <CartContext.Consumer>
        {value => {
          const {dark} = value

          return (
            <Con>
              <Headers />
              <Con1 darker={dark}>
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
                      <Row>
                        <RiPlayListAddLine size="24" />

                        <Head1>Saved videos</Head1>
                      </Row>
                    </Link>
                  </Cover1>
                  <Cover2>
                    <Head1>CONTACT US</Head1>
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
                    <Head1>
                      Enjoy! Now to see your <br />
                      channels and <br /> recommendations
                    </Head1>
                  </Cover2>
                </Left>
                <Right>
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

export default NotFound
