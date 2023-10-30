import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const TrendingThumbnail = styled.img`
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingVideoContent = styled.div`
  width: 50%;
  margin-left: 15px;
  @media screen and (max-width: 576px) {
    width: 95%;
    margin: 10px;
  }
`

export const VideoContent = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`

export const ContentCon = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 576px) {
    margin-left: 10px;
    margin-top: 0px;
  }
`

export const Title = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const ChannelViewsCon = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    margin-top: 6px;
  }
`

export const ChannelName = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  margin: 8px 0px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  @media screen and (max-width: 576px) {
    margin: 0px;
    font-size: 10px;
  }
`

export const Dot = styled.p`
  font-size: 10px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-right: 4px;
  margin-left: 4px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Views = styled.p`
  font-size: 12px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  margin: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
