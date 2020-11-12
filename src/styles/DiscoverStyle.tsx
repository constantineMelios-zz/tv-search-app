import styled from "styled-components";

const DiscoverStyle = styled.section`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  color: var(--white);
  padding: 0.5em;
  padding-bottom: 5em;
  .discover__title {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: var(--boldFont);
    padding: 1em 0;
  }
`

export default DiscoverStyle