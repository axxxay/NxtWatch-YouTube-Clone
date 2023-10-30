import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  InputBox,
  Label,
  LoginForm,
  LoginCard,
  Image,
  ShowPasswordCon,
  LoginButton,
  CheckBox,
  ShowPassText,
  Error,
} from './StyledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({showError: false})
    history.replace('/')
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '' && password === '') {
      this.setState({showError: true, errMsg: 'Enter username and password'})
    } else if (username === '') {
      this.setState({showError: true, errMsg: 'Enter username'})
    } else if (password === '') {
      this.setState({showError: true, errMsg: 'Enter password'})
    } else {
      this.setState({showError: false})

      const url = 'https://apis.ccbp.in/login'
      const loginDetails = {
        username,
        password,
      }
      const options = {
        method: 'POST',

        body: JSON.stringify(loginDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.setState({
          showError: true,
          errMsg: data.error_msg,
        })
      }
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showPassword, username, password, errMsg, showError} = this.state
    const dark =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    const light =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <LoginContainer theme={theme}>
              <LoginCard theme={theme}>
                <Image
                  theme={theme}
                  src={theme === true ? dark : light}
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onClickLogin} className="login-form">
                  <Label theme={theme} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputBox
                    theme={theme}
                    type="text"
                    onChange={this.onChangeUsername}
                    value={username}
                    id="username"
                  />
                  <Label theme={theme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputBox
                    theme={theme}
                    type={showPassword ? 'text' : 'password'}
                    onChange={this.onChangePassword}
                    value={password}
                    id="password"
                  />
                  <ShowPasswordCon>
                    <CheckBox
                      type="checkbox"
                      id="showpassword"
                      onChange={this.onShowPassword}
                    />
                    <ShowPassText htmlFor="showpassword" theme={theme}>
                      Show Password
                    </ShowPassText>
                  </ShowPasswordCon>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <Error>*{errMsg}</Error>}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
