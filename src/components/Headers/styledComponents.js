import styled from 'styled-components'

export const Main = styled.div`
  height: 100px;
  width: 100%;

  padding: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const SmallCon = styled.div`
  height: 95px;
  width: 100%;
  display: flex;
  background-color: ${props => (props.darker ? '#64748b' : '#ffffff')};
  margin-left: 90px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const BigCon = styled.div`
  display: none;
  background-color: ${props => (props.darker ? '#64748b' : '#ffffff')};

  @media screen and (min-width: 768px) {
    height: 95px;
    width: 100%;
    margin-left: 90px;
    display: flex;
    justify-content: space-between;
  }
`

export const SmallCon1 = styled.div`
  height: 90px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
`
export const BigCon1 = styled.div`
  height: 90px;

  display: flex;
  justify-content: flex-start;
`

export const Image1 = styled.img`
  height: 60px;
  width: 130px;
  margin-right: 10px;
`

export const Image2 = styled.img`
  height: 60px;
  width: 60px;
  padding: 5px;
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  height: 80px;
  width: 80px;
  border-width: 0px;
  margin-right: 10px;
`
export const Button1 = styled.button`
  background-color: #ffffff;
  height: 60px;
  width: 100px;
  color: #3b82f6;
  border-color: #3b82f6;
  border-width: 1px;
  margin-right: 10px;
`
