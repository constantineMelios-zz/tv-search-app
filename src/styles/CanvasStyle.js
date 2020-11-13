import styled from 'styled-components'

const CanvasStyle = styled.canvas`
  border-radius: 20px;
  @supports (-webkit-touch-callout: none) {
    opacity: 0;
  }
`

export default CanvasStyle