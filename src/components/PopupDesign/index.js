import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {Con1, Con2, Para, Button1} from './styledComponents'

const ReactPopup = props => {
  const clickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Con1>
      <Popup modal trigger={<Button1>Logout</Button1>}>
        {close => (
          <>
            <Con1>
              <Para>Are you sure, you want to logout</Para>
              <Con2>
                <Button1 onClick={() => close()}>Cancel</Button1>
                <Button1 onClick={clickConfirm}>Confirm</Button1>
              </Con2>
            </Con1>
          </>
        )}
      </Popup>
    </Con1>
  )
}

export default ReactPopup
