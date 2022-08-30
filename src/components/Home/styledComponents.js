import styled from 'styled-components'

export const Con = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`
export const Cons = styled.div`
  display: flex;
  background-color: #f9f9f9;
  justify-content: flex-start;
  align-items: flex-start;
  height: 105px;
  width: 100%;
`
export const Con1 = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  height: 95vh;
  width: 100%;
`
export const Left = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.darker ? '#181818' : '#f9f9f9')};
    color: ${props => (props.darker ? '#f9f9f9' : '#475569')};
    justify-content: space-between;
    width: 300px;
    height: 800px;
    margin-top: 10px;
    margin-left: 0px;
  }
`
export const Cover1 = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin-left: 10px;
`
export const Cover2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const Row22 = styled.li`
  display: flex;
  flex-direction: row;
  background-color: #3b82f6;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
`
export const Row11 = styled.div`
  margin-right: 2px;
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

  margin-bottom: 10px;
`
export const Head67 = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
`
export const Para67 = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
`
export const Head2 = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin-left: 0px;
  margin-right: 380px;
  margin-bottom: 10px;
`
export const RowImage = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 10px;
`
export const Right = styled.div`
  display: flex;
  width: 75vw;
  background-color: ${props => (props.darker ? '#181818 ' : '#f9f9f9')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Line1 = styled.div`
  display: ${props => (props.toClose ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    height: 400px;
    width: 100%;
    background-size: cover;
  }
`
export const Line11 = styled.div`
  display: flex;
  flex-direction:row:
  justify-content:space-between;
  width:100%;

  
`
export const Line2 = styled.div`
  display: flex;

  justify-content: flex-start;
`
export const Input1 = styled.input`
  height: 25px;
  width: 350px;
`
export const Button2 = styled.button`
  background-color: transparent;
  height: 30px;
  width: 30px;
  border-width: 0px;
`
export const Button6 = styled.button`
  background-color: transparent;
  height: 50px;
  width: 110px;
  border-width: 1px;
  margin-bottom: 10px;
  margin-right: 380px;
  color: #3b82f6;
  border-color: #3b82f6;
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
  margin-left: 270px;
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
