import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const SideBarCon = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#f9f9f9')};
  height: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SideBarNav = styled.div`
  width: 100%;
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
  //   color: ${props => (props.activeNav === true ? '#ff0b37' : '#94a3b8')};
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
`

export const StyledIcon2 = styled(HiFire)`
  font-size: 15px;
  //   color: ${props => (props.activeNav === true ? '#ff0b37' : '#94a3b8')};
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
`

export const StyledIcon3 = styled(SiYoutubegaming)`
  font-size: 15px;
  //   color: ${props => (props.activeNav === true ? '#ff0b37' : '#94a3b8')};
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
`

export const StyledIcon4 = styled(MdPlaylistAdd)`
  font-size: 15px;
  //   color: ${props => (props.activeNav === true ? '#ff0b37' : '#94a3b8')};
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
`

export const SideBarFooter = styled.div`
  width: 100%;
  padding: 0px 20px;
`

export const ContactUs = styled.p`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#475569')};
  font-size: 13px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-bottom: 22px;
`
export const SocialCon = styled.div`
  display: flex;
  align-items: center;
`

export const SocialImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
`

export const FooterDesc = styled.p`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#475569')};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 22px;
`
