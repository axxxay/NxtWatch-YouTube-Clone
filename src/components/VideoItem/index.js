import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeVideoItem,
  VideoThumbnail,
  VideoContentCon,
  ChannelProfileImage,
  VideoContent,
  VideoTitle,
  ChannelNameViewsCon,
  LinkItem,
  ChannelName,
  Dot,
} from './StyledComponent'

const VideoItem = ({videoItem}) => {
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
    profileImageUrl,
  } = videoItem

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
          <HomeVideoItem>
            <LinkItem to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentCon>
                <ChannelProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <ChannelNameViewsCon>
                    <ChannelName>{name}</ChannelName>
                    <Dot> • </Dot>
                    <ChannelName>
                      {viewCount} views • {formattedDistance} ago
                    </ChannelName>
                  </ChannelNameViewsCon>
                </VideoContent>
              </VideoContentCon>
            </LinkItem>
          </HomeVideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
