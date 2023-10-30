import SideBar from '../SideBar'
import NavBar from '../NavBar'
import TrendingVideo from '../TrendingVideo'
import SavedVideosContext from '../../context/SavedVideosContext'
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
  NoVideosFoundCon,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './StyledComponent'

const SavedVideosPage = () => {
  const renderVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <SavedVideosContext.Consumer>
            {value1 => {
              const {videoList} = value1
              return (
                <>
                  <TrendingLogoCon theme={theme}>
                    <TrendingLogoSurround theme={theme}>
                      <TrendingLogo />
                    </TrendingLogoSurround>
                    <TrendingHeading theme={theme}>
                      Saved Videos
                    </TrendingHeading>
                  </TrendingLogoCon>
                  <TrendingVideoList theme={theme}>
                    {videoList.map(eachItem => (
                      <TrendingVideo
                        key={eachItem.id}
                        trendingItem={eachItem}
                      />
                    ))}
                  </TrendingVideoList>
                </>
              )
            }}
          </SavedVideosContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <NoVideosFoundCon>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NotFoundHeading theme={theme}>
              No saved videos found
            </NotFoundHeading>
            <NotFoundDesc theme={theme}>
              You can save your videos while watching them
            </NotFoundDesc>
          </NoVideosFoundCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <SavedVideosContext.Consumer>
            {value1 => {
              const {videoList} = value1
              return (
                <MainContainer>
                  <NavBar />
                  <TrendingPageContainer
                    data-testid="savedVideos"
                    theme={theme}
                  >
                    <SideBarCon>
                      <SideBar />
                    </SideBarCon>
                    <TrendingCon>
                      {videoList.length !== 0
                        ? renderVideos()
                        : renderFailure()}
                    </TrendingCon>
                  </TrendingPageContainer>
                </MainContainer>
              )
            }}
          </SavedVideosContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideosPage
