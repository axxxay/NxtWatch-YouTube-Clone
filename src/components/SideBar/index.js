import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarCon,
  StyledIcon,
  StyledIcon2,
  StyledIcon3,
  StyledIcon4,
  NavItem,
  NavItemText,
  SideBarNav,
  SideBarFooter,
  ContactUs,
  SocialCon,
  SocialImg,
  FooterDesc,
} from './StyledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme, activeNav, setActiveNav} = value
      return (
        <SideBarCon theme={theme}>
          <SideBarNav>
            <Link to="/" style={{textDecoration: 'none'}}>
              <NavItem
                theme={theme}
                activeNav={activeNav === 'Home'}
                onClick={() => setActiveNav('Home')}
              >
                <StyledIcon theme={theme} activeNav={activeNav === 'Home'} />
                <NavItemText theme={theme} activeNav={activeNav === 'Home'}>
                  Home
                </NavItemText>
              </NavItem>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <NavItem
                theme={theme}
                activeNav={activeNav === 'Trending'}
                onClick={() => setActiveNav('Trending')}
              >
                <StyledIcon2
                  theme={theme}
                  activeNav={activeNav === 'Trending'}
                />
                <NavItemText theme={theme} activeNav={activeNav === 'Trending'}>
                  Trending
                </NavItemText>
              </NavItem>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <NavItem
                theme={theme}
                activeNav={activeNav === 'Gaming'}
                onClick={() => setActiveNav('Gaming')}
              >
                <StyledIcon3 theme={theme} activeNav={activeNav === 'Gaming'} />
                <NavItemText theme={theme} activeNav={activeNav === 'Gaming'}>
                  Gaming
                </NavItemText>
              </NavItem>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <NavItem
                theme={theme}
                activeNav={activeNav === 'Saved_Videos'}
                onClick={() => setActiveNav('Saved_Videos')}
              >
                <StyledIcon4
                  activeNav={activeNav === 'Saved_Videos'}
                  theme={theme}
                />
                <NavItemText
                  theme={theme}
                  activeNav={activeNav === 'Saved_Videos'}
                >
                  Saved Videos
                </NavItemText>
              </NavItem>
            </Link>
          </SideBarNav>
          <SideBarFooter>
            <ContactUs theme={theme}>CONTACT US</ContactUs>
            <SocialCon>
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialCon>
            <FooterDesc theme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDesc>
          </SideBarFooter>
        </SideBarCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
