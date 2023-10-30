import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 90vh;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 82vh;
  }
`

export const MainContainer = styled.div`
  position: relative;
`

export const TrendingPageContainer = styled.div`
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
  height: 90vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const TrendingLogoSurround = styled.div`
  background-color: ${props => (props.theme === true ? '#000' : '#e2e8f0')};
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
`

export const TrendingLogo = styled(HiFire)`
  font-size: 25px;
  color: #ff0b37;
`

export const TrendingLogoCon = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 40px;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`

export const TrendingHeading = styled.h1`
  color: ${props => (props.theme === true ? '#fff' : '#181818')};
  font-size: 25px;
  font-family: 'Roboto';
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const TrendingVideoList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#000' : '#ffffff')};
  margin: 0px;
  padding: 40px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 20px;
  }
  @media screen and (max-width: 576px) {
    padding: 0px;
    margin-top: 15px;
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
  min-height: 90vh;
  width: 100%;
  padding: 30px;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 35px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const NotFoundDesc = styled.p`
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  font-size: 13px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
  }
`
