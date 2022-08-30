import styled from 'styled-components'

export const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 100vh;
`
export const Con1 = styled.div`
  display: flex;
  background-color: ${props => (props.darker ? '#0f0f0f' : '#f9f9f9')};
  justify-content: flex-start;
`
export const Line = styled.hr`
  border-color: #616e7c;
  border-width: 1px;
  width: 100%;
`
export const Con37 = styled.div`
  display: flex;

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
export const Button3 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color:${props => (props.outline ? ' #2563eb' : '#64748b')}
  margin-left: 10px;
`
export const Button4 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color:${props => (props.outline ? ' #2563eb' : '#64748b')}
  margin-left: 10px;
`
export const Button5 = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: '#64748b';
  margin-left: 10px;
`
export const Cover1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 8px;
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
  padding-bottom: 4px;
  padding-top: 0px;
`
export const RowImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`
export const Right = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`
export const Con4 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 45px;
  margin-right: 15px;
  flex-wrap: wrap;
`
export const Image4 = styled.img`
  height: 60%;
  width: 70%;
`
export const Con5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Head5 = styled.h1`
  font-size: 19px;
`
export const Con6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Con61 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Con62 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Para61 = styled.p`
  font-size: 14px;
`
export const Con7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Image7 = styled.img`
  height: 50px;
  width: 50px;
`
export const Con71 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
