import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Container50,
  Container125,
  Image,
  Input1,
  Input2,
  Input3,
  Button1,
  Head1,
  Container3,
  Para1,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',

    showError: false,
    error: '',
    checking: false,
  }

  updatingName = event => this.setState({username: event.target.value})

  updatingPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, error: errorMsg})
  }

  submitting = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
    this.setState({username: '', password: ''})
  }

  checked = () => {
    this.setState(prevState => ({checking: !prevState.checking}))
  }

  render() {
    const {username, password, error, showError, checking} = this.state
    const pass = checking ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Container50>
        <Container125>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <form onSubmit={this.submitting}>
            <Container125>
              <Head1 htmlFor="user">USERNAME</Head1>
              <Input1
                type="text"
                placeholder="UserName"
                id="user"
                value={username}
                onChange={this.updatingName}
              />
              <Head1 htmlFor="pass">PASSWORD</Head1>
              <Input2
                type={pass}
                id="pass"
                placeholder="Password"
                value={password}
                onChange={this.updatingPassword}
              />
              <Container3>
                <Input3 type="checkbox" id="check" onClick={this.checked} />
                <label htmlFor="check">Show Password</label>
              </Container3>

              <Button1 type="submit">Login</Button1>
              {showError && <Para1>{error}</Para1>}
            </Container125>
          </form>
        </Container125>
      </Container50>
    )
  }
}

export default Login
