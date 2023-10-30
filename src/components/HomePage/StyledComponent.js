import {MdClear} from 'react-icons/md'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

export const MainHomeContainer = styled.div`
  position: relative;
`
export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
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

export const HomeMainCon = styled.div`
  overflow-y: auto;
  height: 90vh;
  width: 85%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 82vh;
  }
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  height: 220px;
`

export const BannerContent = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const BannerImage = styled.img`
  width: 115px;
`

export const BannerText = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 2;
  color: #475569;
  width: 100%;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #475569;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 7px 10px;
`

export const CrossIcon = styled(MdClear)`
  color: #475569;
  font-size: 16px;
`

export const HomeSearchVideoCon = styled.div`
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 30px;
  border: 1px solid ${props => (props.theme === true ? '#424242' : '#cccccc')};
  border-radius: 3px;
  font-family: 'Roboto';
  padding-left: 10px;
  margin: 14px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 20px;
  }
`

export const SearchIconCon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0px;
  background-color: ${props => (props.theme === true ? '#313131' : '#ebebeb')};
  height: 100%;
  width: 60px;
  border-left: 1px solid
    ${props => (props.theme === true ? '#424242' : '#cccccc')};
`

export const InputBox = styled.input`
  border: 0px;
  outline: none;
  background-color: transparent;
  width: 90%;
  height: 100%;
  color: ${props => (props.theme === true ? '#f1f5f9' : '#000')};
`

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 15px;
  color: #616e7c;
`

export const HomeVideoList = styled.ul`
  padding-left: 0px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px 20px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const LoaderCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
`

export const NoVideosFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
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
  background-color: #4f46e5;
  border: 0px; 
  outline: none;
  cursor: pointer;
  color: #f8fafc;
  font-size: 10px;
  font-weight: 500
  font-family: 'Roboto';
  padding: 8px 25px;
  border-radius: 4px;
  margin-top: 18px;
`
