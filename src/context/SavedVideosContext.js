import {createContext} from 'react'

const SavedVideosContext = createContext({
  videoList: [],
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
})

export default SavedVideosContext
