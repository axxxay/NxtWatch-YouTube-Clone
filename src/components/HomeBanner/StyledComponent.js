import {MdClear} from 'react-icons/md'
import styled from 'styled-components'

export const HomeBannerCon = styled.div`
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

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 0px;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
`

export const CrossIcon = styled(MdClear)`
  color: #475569;
  font-size: 17px;
`
