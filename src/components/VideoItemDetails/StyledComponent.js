import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoDetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 90vh;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 82vh;
  }
`

export const MainVideoContainer = styled.div`
  position: relative;
`

export const video = styled.h1`
  font-size: 20px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    padding-bottom: 8vh;
  }
`

export const SideBarCon = styled.div`
  width: 15%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const VideoContentCon = styled.div`
  margin: 20px;
  align-self: flex-start;
  width: 95%;
  @media screen and (max-width: 768px) {
    margin: 14px;
    margin-right: 0px;
  }
`
export const ReactPlayerItem = styled(ReactPlayer)`
  width: 100% !important;
  padding: 20px;
  height: 430px !important;
  @media screen and (max-width: 768px) {
    padding: 0px;
    height: 240px !important;
    min-height: 0px !important;
  }
`

export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  font-family: 'Roboto';
  line-height: 1.7;
  margin: 0px;
`

export const ViewsLikeSaveCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Views = styled.p`
  color: #616e7c;
  font-size: 13px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`

export const LikeSaveCon = styled.div`
  display: flex;
  align-items: center;
`

export const LikeText = styled.p`
  color: ${props => (props.active === true ? '#2563eb' : '#64748b')};
  font-size: 13px;
  font-family: 'Roboto';
  margin-left: 5px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const LikeCon = styled.button`
  display: flex;
  align-items: center;
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  margin-left: 16px;
  padding: 0px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 20px;
  }
`

export const LikeIcon = styled(BiLike)`
  color: ${props => (props.active === true ? '#2563eb' : '#64748b')};
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const DislikeIcon = styled(BiDislike)`
  color: ${props => (props.active === true ? '#2563eb' : '#64748b')};
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const SaveIcon = styled(CgPlayListAdd)`
  color: ${props => (props.active === true ? '#2563eb' : '#64748b')};
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Line = styled.hr`
  border-color: ${props => (props.theme === true ? '#475569' : '#d7dfe9')};
  border-width: 1px;
  background-color: ${props => (props.theme === true ? '#475569' : '#d7dfe9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ChannelSubDescCon = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  align-items: center;
`

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`

export const ChannelDetails = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 16px;
  }
`

export const ChannelName = styled.p`
  font-size: 13px;
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  margin: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Subscribers = styled.p`
  color: #616e7c;
  font-size: 11px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
`

export const Description = styled.p`
  color: ${props => (props.theme === true ? '#ebebeb' : '#475569')};
  font-size: 13px;
  font-family: 'Roboto';
  margin-left: 46px;
  margin-top: 26px;
  line-height: 1.7;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    font-size: 12px;
  }
`

export const LoaderCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

export const NoVideosFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const NotFoundDesc = styled.p`
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  font-size: 15px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 1.7;
  }
`

export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  border: 0px;
  color: #f8fafc;
  font-size: 10px;
  font-weight: 500
  font-family: 'Roboto';
  padding: 8px 25px;
  border-radius: 4px;
  margin-top: 18px;
`
