import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SideBar from '../SideBar'
import NavBar from '../NavBar'
import GamingVideo from '../GamingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  GamingPageContainer,
  SideBarCon,
  GamingCon,
  GamingLogoCon,
  GamingLogo,
  GamingHeading,
  GamingLogoSurround,
  GamingVideoList,
  LoaderCon,
  NoVideosFoundCon,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
  RetryButton,
} from './StyledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingPage extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const {videos} = data
      const formattedData = videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideos = () => {
    const {videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <GamingLogoCon theme={theme}>
                <GamingLogoSurround theme={theme}>
                  <GamingLogo />
                </GamingLogoSurround>
                <GamingHeading theme={theme}>Gaming</GamingHeading>
              </GamingLogoCon>
              <GamingVideoList theme={theme}>
                {videosList.map(eachItem => (
                  <GamingVideo key={eachItem.id} gamingItem={eachItem} />
                ))}
              </GamingVideoList>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderCon data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </LoaderCon>
  )

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const imgUrl =
          theme === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <NoVideosFoundCon>
            <NotFoundImage src={imgUrl} alt="failure view" />
            <NotFoundHeading theme={theme}>
              Oops! Something Went Wrong
            </NotFoundHeading>
            <NotFoundDesc theme={theme}>
              We are having some trouble to complete your request. Please Try
              again.
            </NotFoundDesc>
            <RetryButton type="button" onClick={() => this.getGamingVideos()}>
              Retry
            </RetryButton>
          </NoVideosFoundCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSections = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <MainContainer>
              <NavBar />
              <GamingPageContainer data-testid="gaming" theme={theme}>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <GamingCon>{this.renderSections()}</GamingCon>
              </GamingPageContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingPage
