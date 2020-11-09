import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const CanvasStyle = styled.canvas`
  filter:blur(2px);
  margin-top: 38px;
  margin-left: 13px;
  margin-right: 13px;
  border-radius: 10px;
`

export default function Canvas() {
  const canvasRef = useRef(null)
  
  function getColour() {    
    const value = Math.floor(Math.random() * 255);
    const colour = 'rgb(' + value + ',' + value + ',' + value + ')';
    return colour;
  }

  useEffect(() => {
    const blockSize = 8;
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 200
    canvas.height = 75
    const interval = setInterval(() =>{
      for (let col = 0; col <= canvas.height; col += blockSize) {
        for (let row = 0; row <= canvas.width; row += blockSize) {
          ctx.fillStyle = getColour();        
          ctx.clearRect(row, col, blockSize, blockSize);
          ctx.save();
          ctx.fillRect(row, col, blockSize, blockSize);
          ctx.restore();
        }
      }
      const height = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(canvas.width, height);
      ctx.lineWidth = 50;
      ctx.strokeStyle = 'rgba(30,30,30,.5)';
      ctx.stroke();
    }, 10)
    return (() => {
      clearInterval(interval)
    })
  })
  
  
  return <CanvasStyle ref={canvasRef}/>
}