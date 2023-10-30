import styled from 'styled-components'

export const NotFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90vh;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const MainContainer = styled.div`
  position: relative;
`

export const NotFoundPageContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === true ? 'rgb(24, 24, 24)' : '#ebebeb'};
`

export const SideBarCon = styled.div`
  width: 20%;
  height: 90vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  color: ${props => (props.theme === true ? '#f8fafc' : '#1e293b')};
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 35px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const NotFoundDesc = styled.p`
  color: ${props => (props.theme === true ? '#94a3b8' : '#64748b')};
  font-size: 13px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 1.7;
  }
`
