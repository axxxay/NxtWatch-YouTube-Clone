import {
    LinkItem,
    GamingVideoItem,
    GamingImage,
    GamingHeading,
    GamingViews,
  } from './StyledComponent'
  import ThemeContext from '../../context/ThemeContext'
  
  const GamingVideo = ({gamingItem}) => {
    const {id, thumbnailUrl, title, viewCount} = gamingItem
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <GamingVideoItem>
              <LinkItem to={`/videos/${id}`}>
                <GamingImage src={thumbnailUrl} alt="video thumbnail" />
                <GamingHeading theme={theme}>{title}</GamingHeading>
                <GamingViews theme={theme}>
                  {viewCount} Watching Worldwide
                </GamingViews>
              </LinkItem>
            </GamingVideoItem>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
  
  export default GamingVideo
  