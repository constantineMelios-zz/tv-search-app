import React from 'react'
import Canvas from './Canvas'
import styled from 'styled-components'

const SVGStyle = styled.svg`
  width: 500px;
  height: auto;
  margin: 5em;
`

export default function Test() {
  return (
    <SVGStyle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 127.8">
      <g id="tv">
        <rect x="0.5" y="24.3" width="122" height="103" rx="12.59" style={{fill:"#fff"}}/>
        <path d="M146.91,36A12.1,12.1,0,0,1,159,48.09v77.82A12.1,12.1,0,0,1,146.91,138H50.09A12.1,12.1,0,0,1,38,125.91V48.09A12.1,12.1,0,0,1,50.09,36h96.82m0-1H50.09A13.09,13.09,0,0,0,37,48.09v77.82A13.09,13.09,0,0,0,50.09,139h96.82A13.09,13.09,0,0,0,160,125.91V48.09A13.09,13.09,0,0,0,146.91,35Z" transform="translate(-37 -11.2)"/>
      </g>
      <g id="screen">
        <rect x="12.5" y="38.3" width="98" height="75" rx="7.25" style={{fill:"#fff"}}/>
        <path d="M140.25,50A6.76,6.76,0,0,1,147,56.75v60.5a6.76,6.76,0,0,1-6.75,6.75H56.75A6.76,6.76,0,0,1,50,117.25V56.75A6.76,6.76,0,0,1,56.75,50h83.5m0-1H56.75A7.75,7.75,0,0,0,49,56.75v60.5A7.75,7.75,0,0,0,56.75,125h83.5a7.75,7.75,0,0,0,7.75-7.75V56.75A7.75,7.75,0,0,0,140.25,49Z" transform="translate(-37 -11.2)"/>
        <line x1="26.5" y1="3.3" x2="54.5" y2="24.3" style={{fill:"none", stroke: "#000",strokeMiterlimit: "10"}}/>
        <line x1="71.5" y1="24.3" x2="89.5" y2="0.3" style={{fill: "none", stroke: "#000",strokeMiterlimit:"10"}}/>
        <foreignObject width="110" height="125">
          <Canvas />
        </foreignObject>
      </g>
    </SVGStyle>
  )
}