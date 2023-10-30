import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import SavedVideosContext from '../../context/SavedVideosContext'
import ThemeContext from '../../context/ThemeContext'
import {
  MainVideoContainer,
  VideoDetailsCon,
  VideoDetailsContainer,
  SideBarCon,
  VideoContentCon,
  ReactPlayerItem,
  VideoTitle,
  ViewsLikeSaveCon,
  LikeSaveCon,
  Views,
  LikeText,
  LikeCon,
  SaveIcon,
  DislikeIcon,
  LikeIcon,
  Line,
  ChannelSubDescCon,
  ChannelImg,
  ChannelDetails,
  ChannelName,
  Subscribers,
  Description,
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    like: false,
    dislike: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  toggleLike = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  toggleDislike = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
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
            <RetryButton type="button" onClick={() => this.getVideosApi()}>
              Retry
            </RetryButton>
          </NoVideosFoundCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetails = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      name,
      profileImageUrl,
      subscriberCount,
    } = videoDetails
    const date = new Date(publishedAt)
    let formattedDistance = formatDistanceToNow(date)
    formattedDistance = formattedDistance.split(' ')
    formattedDistance = formattedDistance.slice(1, 3)
    formattedDistance = formattedDistance.join(' ')
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <SavedVideosContext.Consumer>
              {value1 => {
                const {
                  videoList,
                  addToSavedVideos,
                  removeFromSavedVideos,
                } = value1
                const onClickSave = () => {
                  addToSavedVideos(videoDetails)
                }
                const onClickUnsave = () => {
                  removeFromSavedVideos(videoDetails)
                }
                const isIncluded = videoList.some(
                  eachItem => eachItem.id === videoDetails.id,
                )

                return (
                  <>
                    <ReactPlayerItem url={videoUrl} />
                    <VideoContentCon>
                      <VideoTitle theme={theme}>{title}</VideoTitle>
                      <ViewsLikeSaveCon>
                        <Views>
                          {viewCount} views • {formattedDistance} ago
                        </Views>
                        <LikeSaveCon>
                          <LikeCon type="button" onClick={this.toggleLike}>
                            <LikeIcon active={like} />
                            <LikeText active={like}>Like</LikeText>
                          </LikeCon>
                          <LikeCon type="button" onClick={this.toggleDislike}>
                            <DislikeIcon active={dislike} />
                            <LikeText active={dislike}>Dislike</LikeText>
                          </LikeCon>
                          {isIncluded === true ? (
                            <LikeCon type="button" onClick={onClickUnsave}>
                              <SaveIcon active={isIncluded} />
                              <LikeText active={isIncluded}>Saved</LikeText>
                            </LikeCon>
                          ) : (
                            <LikeCon type="button" onClick={onClickSave}>
                              <SaveIcon />
                              <LikeText>Save</LikeText>
                            </LikeCon>
                          )}
                        </LikeSaveCon>
                      </ViewsLikeSaveCon>
                      <Line />
                      <ChannelSubDescCon>
                        <ChannelImg src={profileImageUrl} alt="channel logo" />
                        <ChannelDetails>
                          <ChannelName theme={theme}>{name}</ChannelName>
                          <Subscribers>
                            {subscriberCount} subscribers
                          </Subscribers>
                        </ChannelDetails>
                      </ChannelSubDescCon>
                      <Description theme={theme}>{description}</Description>
                    </VideoContentCon>
                  </>
                )
              }}
            </SavedVideosContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderSections = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.success:
        return this.renderVideoDetails()
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
            <MainVideoContainer>
              <NavBar />
              <VideoDetailsContainer
                data-testid="videoItemDetails"
                theme={theme}
              >
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <VideoDetailsCon>{this.renderSections()}</VideoDetailsCon>
              </VideoDetailsContainer>
            </MainVideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
