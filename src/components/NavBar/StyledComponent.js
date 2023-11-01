import styled from 'styled-components'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {HiMoon, HiFire} from 'react-icons/hi'
import {AiFillHome, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const NavBarCon = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#212121' : '#f9f9f9')};
  position: absolute;
  top: 0px;
  
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
      padding: 20px 15px;
  }
`

export const Logo = styled.img`
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`

export const Profile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0px 20px;
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
`

export const MenuIcon = styled(AiOutlineMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
    font-size: 20px;
    margin: 0px 20px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  color: ${props => (props.theme === true ? '#ffffff' : '#3b82f6')};
  font-size: 12px;
  padding: 4px 12px;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  padding: 0px;
  border: 0px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  align-self: flex-end;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 0px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const SunIcon = styled(FiSun)`
  font-size: 20px;
  color: #ffffff;
`

export const MoonIcon = styled(HiMoon)`
  font-size: 22px;
  color: #000;
`

export const LogoutCon = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-color: transparent;
    padding: 0px;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
  }
`
export const LogoutIcon = styled(FiLogOut)`
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  font-size: 20px;
`

export const LogoutPop = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#f1f1f1')};
  padding: 15px;
  border-radius: 6px;
`

export const LogoutText = styled.p`
  font-size: 13px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#00306e')};
  margin: 0px;
  text-align: center;
  font-family: 'Roboto';
  margin-top: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const YesNoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled.button`
  border: 1px solid #94a3b8;
  background-color: transparent;
  border-radius: 2px;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 12px;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  padding: 7px 12px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const ConfirmButton = styled.button`
  border: 0px;
  background-color: #3b82f6;
  color: #fff;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 7px 12px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const SideBarCon = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#f9f9f9')};
  height: 100vh;
  padding: 30px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const SideBarNav = styled.div`
  min-width: 100%;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;

  background-color: ${props => {
    let bgColor = 'transparent'
    if (props.theme === true) {
      if (props.activeNav === true) {
        bgColor = '#383838'
      } else {
        bgColor = 'transparent'
      }
    } else if (props.activeNav === true) {
      bgColor = '#e2e8f0'
    }
    return bgColor
  }};
`

export const NavItemText = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: ${props => (props.activeNav === true ? 600 : 500)};
  margin-left: 20px;
`

export const StyledIcon = styled(AiFillHome)`
  font-size: 15px;
  color: ${props => {
    let bgColor = '#475569'
    if (props.theme === true) {
      if (props.activeNav === true) {
        bgColor = '#ff0b37'
      } else {
        bgColor = '#94a3b8'
      }
    } else if (props.activeNav === true) {
      bgColor = '#ff0b37'
    }
    return bgColor
  }};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const StyledIcon2 = styled(HiFire)`
  font-size: 15px;
  color: ${props => {
    let bgColor = '#475569'
    if (props.theme === true) {
      if (props.activeNav === true) {
        bgColor = '#ff0b37'
      } else {
        bgColor = '#94a3b8'
      }
    } else if (props.activeNav === true) {
      bgColor = '#ff0b37'
    }
    return bgColor
  }};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const StyledIcon3 = styled(SiYoutubegaming)`
  font-size: 15px;
  color: ${props => {
    let bgColor = '#475569'
    if (props.theme === true) {
      if (props.activeNav === true) {
        bgColor = '#ff0b37'
      } else {
        bgColor = '#94a3b8'
      }
    } else if (props.activeNav === true) {
      bgColor = '#ff0b37'
    }
    return bgColor
  }};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const StyledIcon4 = styled(MdPlaylistAdd)`
  font-size: 15px;
  color: ${props => {
    let bgColor = '#475569'
    if (props.theme === true) {
      if (props.activeNav === true) {
        bgColor = '#ff0b37'
      } else {
        bgColor = '#94a3b8'
      }
    } else if (props.activeNav === true) {
      bgColor = '#ff0b37'
    }
    return bgColor
  }};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const CloseButton = styled.button`
  padding: 0px;
  border: 0px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 30px;
`

export const CloseIcon = styled(AiOutlineClose)`
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  font-size: 20px;
`

export const BottomNavBar = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    background-color: ${props =>
      props.theme === true ? '#212121' : '#f9f9f9'};
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 8vh;
    padding: 10px 0px;
  }
`

export const ListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
