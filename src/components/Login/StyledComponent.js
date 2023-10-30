import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#f9f9f9')};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
  width: 35%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  padding: 40px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 92%;
    padding: 30px 13px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  font-size: 10px;
  font-weight: 600;
  color: ${props => (props.theme === true ? '#ffffff' : '#616e7c')};
  font-family: 'Roboto';
  margin-bottom: 6px;
  margin-top: 17px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const InputBox = styled.input`
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#475569' : '#cbd5e1')};
  width: 100%;
  height: 32px;
  color: ${props => (props.theme === true ? '#e2e8f0' : '#000000')};
  font-family: 'Roboto';
  outline: none;
  padding-left: 15px;
  border-radius: 4px;
`
export const Image = styled.img`
  width: 150px;
  margin-bottom: 33px;

  @media screen and (max-width: 768px) {
    width: 100px;
    margin-bottom: 15px;
  }
`
export const ShowPasswordCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

export const CheckBox = styled.input`
  height: 14px;
  width: 14px;
`
export const ShowPassText = styled.label`
  font-size: 12px;
  margin: 0px;
  color: ${props => (props.theme === true ? '#e2e8f0' : '#000000')};
  margin-left: 5px;\
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  margin-top: 25px;
  background-color: #3b82f6;
  height: 32px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  border: 0px;
  cursor: pointer;
  border-radius: 7px;
`
export const Error = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 5px;
  outline: none;
  cursor: pointer;
`
