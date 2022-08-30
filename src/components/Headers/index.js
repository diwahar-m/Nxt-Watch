import {Link} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import {HiViewList, HiOutlineLogout, HiMoon} from 'react-icons/hi'
import CartContext from '../../context/CartContext'
import ReactPopup from '../PopupDesign'

import {
  Main,
  SmallCon,
  BigCon,
  SmallCon1,
  Button,
  Image1,
  Image2,
  BigCon1,
} from './styledComponents'

const Headers = () => (
  <CartContext.Consumer>
    {value => {
      const {changeTheme, dark} = value

      const image1 = dark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const toDark = () => changeTheme()

      return (
        <Main>
          <SmallCon darker={dark}>
            <Link to="/">
              <Image1 src={image1} alt="website logo" />
            </Link>
            <SmallCon1>
              <Button data-testid="theme" onClick={toDark}>
                {dark && <FiSun color="#ffffff" />}
                {!dark && <HiMoon />}
              </Button>
              <Button>
                <HiViewList />
              </Button>
              <Button>
                <HiOutlineLogout />
              </Button>
            </SmallCon1>
          </SmallCon>
          <BigCon darker={dark}>
            <Link to="/">
              <Image1 src={image1} alt="website logo" />
            </Link>
            <BigCon1>
              <Button data-testid="theme" onClick={toDark}>
                {dark && <FiSun color="#ffffff" />}
                {!dark && <HiMoon />}
              </Button>
              <Button>
                <Image2
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                  alt="profile"
                />
              </Button>
              <ReactPopup />
            </BigCon1>
          </BigCon>
        </Main>
      )
    }}
  </CartContext.Consumer>
)

export default Headers
