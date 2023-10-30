import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import HomeBanner from '../HomeBanner'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  SideBarCon,
  HomeMainCon,
  SearchContainer,
  InputBox,
  SearchIcon,
  SearchIconCon,
  HomeSearchVideoCon,
  HomeVideoList,
  LoaderCon,
  NoVideosFoundCon,
  NotFoundImage,
  NotFoundHeading,
  MainHomeContainer,
  NotFoundDesc,
  RetryButton,
} from './StyledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  notFound: 'NOT_FOUND',
  failure: 'FAILURE',
}

class HomePage extends Component {
  state = {
    videoList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosApi()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      if (videos.length === 0) {
        this.setState({apiStatus: apiStatusConstants.notFound})
      } else {
        const updatedData = videos.map(eachItem => ({
          id: eachItem.id,
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        }))
        this.setState({
          videoList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderCon data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </LoaderCon>
  )

  renderNoVideosFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <NoVideosFoundCon>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NotFoundHeading theme={theme}>
              No Search results found
            </NotFoundHeading>
            <NotFoundDesc theme={theme}>
              Try different key words or remove search filter
            </NotFoundDesc>
            <RetryButton type="button" onClick={() => this.getVideosApi()}>
              Retry
            </RetryButton>
          </NoVideosFoundCon>
        )
      }}
    </ThemeContext.Consumer>
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
            <RetryButton type="button" onClick={() => this.getVideosApi()}>
              Retry
            </RetryButton>
          </NoVideosFoundCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = () => {
    const {videoList} = this.state
    return (
      <HomeVideoList>
        {videoList.map(eachItem => (
          <VideoItem key={eachItem.id} videoItem={eachItem} />
        ))}
      </HomeVideoList>
    )
  }

  renderSections = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.notFound:
        return this.renderNoVideosFound()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.success:
        return this.renderVideos()

      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    // const theme = false
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, showBanner, closeBanner} = value
          return (
            <MainHomeContainer>
              <NavBar />
              <HomeContainer data-testid="home" theme={theme}>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <HomeMainCon>
                  {showBanner && (
                    <HomeBanner closeBanner={() => closeBanner()} />
                  )}
                  <HomeSearchVideoCon>
                    <SearchContainer theme={theme}>
                      <InputBox
                        type="search"
                        theme={theme}
                        value={searchInput}
                        onChange={this.onChangeInput}
                        placeholder="Search"
                      />
                      <SearchIconCon
                        data-testid="searchButton"
                        type="button"
                        onClick={() => this.getVideosApi()}
                        theme={theme}
                      >
                        <SearchIcon />
                      </SearchIconCon>
                    </SearchContainer>
                    {this.renderSections()}
                  </HomeSearchVideoCon>
                </HomeMainCon>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomePage
