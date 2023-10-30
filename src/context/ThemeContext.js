import {createContext} from 'react'

const ThemeContext = createContext({
  theme: false,
  activeNav: 'Home',
  showBanner: true,
  toggleTheme: () => {},
  setActiveNav: () => {},
  closeBanner: () => {},
})

export default ThemeContext
