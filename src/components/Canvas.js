import React, { useEffect, useRef } from 'react'
import { CanvasStyle } from '../styles';

export default function Canvas() {
  const canvasRef = useRef(null)

  function generateRandomSample(context, w, h) {
    const intensity = [];
    const factor = h / 50;
    const trans = 1 - Math.random() * 0.05;

    const intensityCurve = [];
    for (let i = 0; i < Math.floor(h / factor) + factor; i++)
      intensityCurve.push(Math.floor(Math.random() * 15))

    for (let i = 0; i < h; i++) {
      const value = interpolate((i / factor), Math.floor(i / factor), intensityCurve[Math.floor(i / factor)], Math.floor(i / factor) + 1, intensityCurve[Math.floor(i / factor) + 1]);
      intensity.push(value);
    }

    const imageData = context.createImageData(w, h);
    for (let i = 0; i < (w * h); i++) {
      const k = i * 4;
      let color = Math.floor(36 * Math.random());
      color += intensity[Math.floor(i / w)];
      imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color;
      imageData.data[k + 3] = Math.round(255 * trans);
    }
    return imageData;
  }

  function interpolate(x, x0, y0, x1, y1) {
    return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("gl") || canvas.getContext("2d")
    const scaleFactor = 2.5
    const samples = []
    let sampleIndex = 0
    let scanOffsetY = 0
    const FPS = 60
    const scanSpeed = FPS * 15
    const SAMPLE_COUNT = 10
    canvas.width = 290
    canvas.height = 230
    const scanSize = (canvas.offsetHeight / scaleFactor) / 3
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      samples.push(generateRandomSample(context, canvas.width, canvas.height))
    }
    function render() {
      context.putImageData(samples[Math.floor(sampleIndex)], 0, 0)
      sampleIndex += 20 / FPS
      if (sampleIndex >= samples.length) sampleIndex = 0
      const grd = context.createLinearGradient(0, scanOffsetY, 0, scanSize + scanOffsetY);

      grd.addColorStop(0, 'rgba(255,255,255,0)');
      grd.addColorStop(0.1, 'rgba(255,255,255,0)');
      grd.addColorStop(0.2, 'rgba(255,255,255,0.2)');
      grd.addColorStop(0.3, 'rgba(255,255,255,0.0)');
      grd.addColorStop(0.45, 'rgba(255,255,255,0.1)');
      grd.addColorStop(0.5, 'rgba(255,255,255,1.0)');
      grd.addColorStop(0.55, 'rgba(255,255,255,0.55)');
      grd.addColorStop(0.6, 'rgba(255,255,255,0.25)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');

      context.fillStyle = grd;
      context.fillRect(0, scanOffsetY, canvas.width, scanSize + scanOffsetY);
      context.globalCompositeOperation = "lighter";

      scanOffsetY += (canvas.height / scanSpeed);
      if (scanOffsetY > canvas.height) scanOffsetY = -(scanSize / 2);

      window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)
  })


  return (
    <CanvasStyle ref={canvasRef} width={290} height={230}>
    </CanvasStyle>
  )
}