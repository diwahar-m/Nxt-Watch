import styled from 'styled-components'

export const Con = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 230px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
`
export const Con1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 220px;
`
export const Con2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 220px;
`
export const Con3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 220px;
`
export const Image1 = styled.img`
  height: 140px;
  width: 220px;
`
export const Image2 = styled.img`
  height: 20px;
  width: 20px;
`
export const Head = styled.p`
  font-size: 12px;
  color: ${props => (props.darker ? '#ffffff' : ' #0f0f0f')};
`
export const Para = styled.p`
  font-size: 10px;

  color: ${props => (props.darker ? '#ffffff' : ' #475569')};
`
