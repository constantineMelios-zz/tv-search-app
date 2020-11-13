import styled from 'styled-components'

console.log(window.location.href)

const FooterStyle = styled.footer`
  margin: -3em auto;
  padding: 0.5em;
  text-align: center;
  font-size: 0.65rem;
  color: var(--white);
  a {
    color: inherit;
    text-decoration: none;
    margin-right: 1em;
  }
`

export default FooterStyle