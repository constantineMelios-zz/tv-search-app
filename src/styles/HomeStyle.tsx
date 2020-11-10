import styled from 'styled-components'


const HomeStyle = styled.main`
  width: 70vw;
  height: 100vh;
  margin: auto;
  padding: 2em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    flex: 1 1 50%;
  }
  div {
    width: 50%;
    text-align: center;
  } 
`

export default HomeStyle