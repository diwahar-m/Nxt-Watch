import styled from 'styled-components'

export const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const Head2 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`
export const Con1 = styled.div`
  display: flex;
  background-color: ${props => (props.darker ? '#181818 ' : '#f9f9f9')};
  justify-content: flex-start;
`
export const Left = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25vw;
    height: 100vh;
  }
`
export const Cover1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`
export const Cover2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
`
export const Head1 = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin-left: 170px;
`
export const RowImage = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 10px;
`
export const Right = styled.div`
  display: flex;
  width: 75vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Line1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  height: 130px;
  @media screen and (min-width: 768px) {
    background-image: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png';
    height: 130px;
    background-size: cover;
  }
`
export const Line2 = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background-color: #d7dfe9;
  justify-content: flex-start;
`
export const Input1 = styled.div`
  height: 15px;
  width: 150px;
`
export const Button2 = styled.button`
  background-color: transparent;
  height: 15px;
  width: 20px;
  border-width: 0px;
`
export const Line3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const Line33 = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  box-sizing: border-box;
`

export const Image1 = styled.img`
  height: 100px;
  width: 200px;
`
export const Button1 = styled.button`
  background-color: #1e293b;
  color: #1e293b;
  border-width: 1px;
  border-color: #1e293b;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FailureCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureHead = styled.h1`
  color: #ffffff;
  font-weight: bold;
`

export const FailurePara = styled.p`
  color: #475569;
  font-size: 12px;
`
export const FailureButton = styled.button`
  color: #475569;
  font-size: 12px;
`
export const Image4 = styled.img`
  height: 200px;
  width: 200px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Image5 = styled.img`
  height: 200px;
  width: 200px;
`
export const ConButton = styled.button`
  background-color: #00306e;
  color: #ffffff;
  border-width: 0px;
`
export const ConHead = styled.h1`
  color: #0f0f0f;
  font-weight: bold;
`
export const ConPara = styled.p`
  color: #475569;
`
