import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import {
  NavBarCon,
  NavMenu,
  LogoutButton,
  Profile,
  Logo,
  LogoutIcon,
  ThemeButton,
  SunIcon,
  MoonIcon,
  LogoutCon,
  LogoutPop,
  LogoutText,
  YesNoContainer,
  CancelButton,
  ConfirmButton,
  StyledIcon,
  StyledIcon2,
  StyledIcon3,
  StyledIcon4,
  BottomNavBar,
  ListItem,
} from './StyledComponent'
import './style.css'

const NavBar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, toggleTheme, activeNav, setActiveNav} = value
        const logo = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <>
            <NavBarCon theme={theme}>
              <Link to="/" onClick={() => setActiveNav('Home')}>
                <Logo src={logo} alt="website logo" />
              </Link>
              <NavMenu>
                <ListItem>
                  <ThemeButton
                    data-testid="theme"
                    type="button"
                    onClick={() => toggleTheme()}
                  >
                    {theme === true ? <SunIcon theme={theme} /> : <MoonIcon />}
                  </ThemeButton>
                </ListItem>
                <ListItem>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ListItem>

                <Popup
                  modal
                  trigger={
                    <ListItem>
                      <LogoutButton theme={theme} type="button">
                        Logout
                      </LogoutButton>
                      <LogoutCon type="button">
                        <LogoutIcon theme={theme} />
                      </LogoutCon>
                    </ListItem>
                  }
                >
                  {close => (
                    <LogoutPop theme={theme}>
                      <LogoutText theme={theme}>
                        Are you sure, you want to logout
                      </LogoutText>
                      <YesNoContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </YesNoContainer>
                    </LogoutPop>
                  )}
                </Popup>
              </NavMenu>
            </NavBarCon>
            <BottomNavBar theme={theme}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <StyledIcon
                  onClick={() => setActiveNav('Home')}
                  theme={theme}
                  activeNav={activeNav === 'Home'}
                />
              </Link>
              <Link to="/trending" style={{textDecoration: 'none'}}>
                <StyledIcon2
                  onClick={() => setActiveNav('Trending')}
                  theme={theme}
                  activeNav={activeNav === 'Trending'}
                />
              </Link>
              <Link to="/gaming" style={{textDecoration: 'none'}}>
                <StyledIcon3
                  onClick={() => setActiveNav('Gaming')}
                  theme={theme}
                  activeNav={activeNav === 'Gaming'}
                />
              </Link>
              <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                <StyledIcon4
                  activeNav={activeNav === 'Saved_Videos'}
                  theme={theme}
                  onClick={() => setActiveNav('Saved_Videos')}
                />
              </Link>
            </BottomNavBar>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(NavBar)
