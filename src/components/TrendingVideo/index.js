import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideoItem,
  TrendingThumbnail,
  TrendingVideoContent,
  VideoContent,
  ChannelImage,
  ContentCon,
  Title,
  ChannelViewsCon,
  ChannelName,
  Dot,
  LinkItem,
  Views,
} from './StyledComponent'

const TrendingVideo = ({trendingItem}) => {
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
    profileImageUrl,
  } = trendingItem

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
          <TrendingVideoItem>
            <LinkItem to={`/videos/${id}`}>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoContent>
                <VideoContent>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <ContentCon>
                    <Title theme={theme}>{title}</Title>
                    <ChannelViewsCon>
                      <ChannelName theme={theme}>{name}</ChannelName>
                      <Dot theme={theme}>{'    •    '}</Dot>
                      <Views theme={theme}>
                        {viewCount} views • {formattedDistance} ago
                      </Views>
                    </ChannelViewsCon>
                  </ContentCon>
                </VideoContent>
              </TrendingVideoContent>
            </LinkItem>
          </TrendingVideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideo
