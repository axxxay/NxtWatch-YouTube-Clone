import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GamingVideoItem = styled.li`
  width: 32%;
  margin-bottom: 55px;
  @media screen and (max-width: 576px) {
    width: 48%;
  }
`

export const GamingImage = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const GamingHeading = styled.p`
  color: ${props => (props.theme === true ? '#f1f5f9' : '#181818')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-top: 13px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const GamingViews = styled.p`
  color: ${props => (props.theme === true ? '#64748b' : '#475569')};
  font-size: 11px;
  font-family: 'Roboto';
  margin: 0px;
  line-height: 1.7;
  margin-top: 5px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
