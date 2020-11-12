import styled from 'styled-components';

const LanguageStyle = styled.button`
  border: none;
  background: none;
  padding: 0.15em;
  cursor: pointer;
  img {
    width: 50px;
    transition: transform 0.25s ease, border 0.25s ease;
    border-radius: 100%;
    border: 3px solid var(--white);
    :hover {
      transform: scale(1.05);
      border: 1px solid var(--white);
    }
  }
`

export default LanguageStyle