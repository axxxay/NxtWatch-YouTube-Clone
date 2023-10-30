import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HomeVideoItem = styled.li`
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 49%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 35px;
  }
  width: 32%;
  margin-bottom: 60px;
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoContentCon = styled.div`
  display: flex;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`

export const ChannelProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const VideoContent = styled.div`
  width: 100%;
  margin-left: 12px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  font-size: 14px;
  line-height: 1.5;
  font-family: 'Roboto';
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`

export const ChannelNameViewsCon = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const Dot = styled.p`
  font-size: 10px;
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  margin-right: 4px;
  margin-left: 4px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
