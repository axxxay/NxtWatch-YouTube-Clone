import SideBar from '../SideBar'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  NotFoundPageContainer,
  SideBarCon,
  NotFoundCon,
  NoVideosFoundCon,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './StyledComponent'

const NotFoundPage = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value
      const imgUrl =
        theme === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <MainContainer>
          <NavBar />
          <NotFoundPageContainer theme={theme}>
            <SideBarCon>
              <SideBar />
            </SideBarCon>
            <NotFoundCon>
              <NoVideosFoundCon>
                <NotFoundImage src={imgUrl} alt="not found" />
                <NotFoundHeading theme={theme}>Page Not Found</NotFoundHeading>
                <NotFoundDesc theme={theme}>
                  we are sorry, the page you requested could not be found.
                </NotFoundDesc>
              </NoVideosFoundCon>
            </NotFoundCon>
          </NotFoundPageContainer>
        </MainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFoundPage
