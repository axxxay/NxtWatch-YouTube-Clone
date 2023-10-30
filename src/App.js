import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './components/HomePage'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedVideosPage from './components/SavedVideosPage'
import SavedVideosContext from './context/SavedVideosContext'
import ThemeContext from './context/ThemeContext'
import NotFoundPage from './components/NotFoundPage'
import './App.css'

class App extends Component {
  state = {videoList: [], theme: false, activeNav: 'Home', showBanner: true}

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  setActiveNav = activeNav => {
    this.setState({activeNav})
  }

  toggleTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  addToSavedVideos = videoItem => {
    const {videoList} = this.state
    const isIncluded = videoList.some(eachItem => eachItem.id === videoItem.id)
    if (isIncluded === false) {
      this.setState(prevState => ({
        videoList: [...prevState.videoList, videoItem],
      }))
    }
  }

  removeFromSavedVideos = videoItem => {
    const {videoList} = this.state
    const isIncluded = videoList.some(eachItem => eachItem.id === videoItem.id)
    if (isIncluded === true) {
      const updatedVideoList = videoList.filter(
        eachItem => eachItem.id !== videoItem.id,
      )

      this.setState({videoList: updatedVideoList})
    }
  }

  render() {
    const {videoList, theme, activeNav, showBanner} = this.state
    return (
      <>
        <ThemeContext.Provider
          value={{
            theme,
            activeNav,
            showBanner,
            setActiveNav: this.setActiveNav,
            toggleTheme: this.toggleTheme,
            closeBanner: this.closeBanner,
          }}
        >
          <SavedVideosContext.Provider
            value={{
              videoList,
              addToSavedVideos: this.addToSavedVideos,
              removeFromSavedVideos: this.removeFromSavedVideos,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={HomePage} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <ProtectedRoute exact path="/trending" component={TrendingPage} />
              <ProtectedRoute exact path="/gaming" component={GamingPage} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideosPage}
              />
              <ProtectedRoute
                exact
                path="/not-found"
                component={NotFoundPage}
              />
              <Redirect to="/not-found" />
            </Switch>
          </SavedVideosContext.Provider>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
