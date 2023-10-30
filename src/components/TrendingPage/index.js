import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SideBar from '../SideBar'
import NavBar from '../NavBar'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  TrendingPageContainer,
  SideBarCon,
  TrendingCon,
  TrendingLogoCon,
  TrendingLogo,
  TrendingHeading,
  TrendingLogoSurround,
  TrendingVideoList,
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

class TrendingPage extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
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
              <TrendingLogoCon theme={theme}>
                <TrendingLogoSurround theme={theme}>
                  <TrendingLogo />
                </TrendingLogoSurround>
                <TrendingHeading theme={theme}>Trending</TrendingHeading>
              </TrendingLogoCon>
              <TrendingVideoList theme={theme}>
                {videosList.map(eachItem => (
                  <TrendingVideo key={eachItem.id} trendingItem={eachItem} />
                ))}
              </TrendingVideoList>
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
            <RetryButton type="button" onClick={() => this.getTrendingVideos()}>
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
              <TrendingPageContainer data-testid="trending" theme={theme}>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <TrendingCon>{this.renderSections()}</TrendingCon>
              </TrendingPageContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingPage
