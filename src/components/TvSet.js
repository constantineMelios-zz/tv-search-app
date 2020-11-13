import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TextSelector from '../helpers/TextSelector'
import { TvSetStyle } from '../styles'
import Canvas from './Canvas'


export default function TvSet(props) {
  const language = useSelector((state) => state.language)

  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  return (
    <Link to='/discover'>
      <TvSetStyle>
        <p>{TextSelector('CLICK TO FIND', 'ΒΡΕΣ ΤΗΝ ΕΔΩ', language)}</p>
        <svg viewBox='0 0 464.56 482.45' {...props}>
          <defs>
            <linearGradient
              id='prefix__linear-gradient'
              x1={185.87}
              y1={162.39}
              x2={198.73}
              y2={162.39}
              gradientTransform='translate(17.02 -10.99)'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#d7d7d7' />
              <stop offset={1} stopColor='#969696' />
            </linearGradient>
            <linearGradient
              id='prefix__linear-gradient-2'
              x1={344.21}
              y1={183.87}
              x2={357.06}
              y2={183.87}
              gradientTransform='rotate(90 390.95 172.25)'
              xlinkHref='#prefix__linear-gradient'
            />
            <linearGradient
              id='prefix__linear-gradient-3'
              x1={96.43}
              y1={476.84}
              x2={96.43}
              y2={424.36}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#2e302f' />
              <stop offset={1} stopColor='#1c1e1d' />
            </linearGradient>
            <linearGradient
              id='prefix__linear-gradient-4'
              x1={159.48}
              y1={594.15}
              x2={159.48}
              y2={541.67}
              gradientTransform='matrix(-1 0 0 1 527.61 -117.31)'
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-5'
              x1={232.28}
              y1={107.34}
              x2={232.28}
              y2={424.26}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#fbfbfb' />
              <stop offset={1} stopColor='#969696' />
            </linearGradient>
            <linearGradient
              id='prefix__linear-gradient-6'
              x1={232.28}
              y1={425.34}
              x2={232.28}
              y2={126.01}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#4d4f4e' />
              <stop offset={1} stopColor='#969696' />
            </linearGradient>
            <linearGradient
              id='prefix__linear-gradient-7'
              x1={400}
              y1={542.66}
              x2={400}
              y2={243.32}
              xlinkHref='#prefix__linear-gradient-5'
            />
            <linearGradient
              id='prefix__linear-gradient-8'
              x1={394}
              y1={282.88}
              x2={394}
              y2={286.95}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-9'
              x1={394}
              y1={298.9}
              x2={394}
              y2={302.97}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-10'
              x1={394}
              y1={306.91}
              x2={394}
              y2={310.99}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-11'
              x1={394}
              y1={322.93}
              x2={394}
              y2={327.01}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-12'
              x1={394}
              y1={338.95}
              x2={394}
              y2={343.03}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-13'
              x1={394}
              y1={354.98}
              x2={394}
              y2={359.05}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-14'
              x1={394}
              y1={373.42}
              x2={394}
              y2={379.53}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-15'
              x1={526.93}
              y1={387.15}
              x2={593.17}
              y2={387.15}
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-16'
              x1={501.67}
              y1={370.26}
              x2={548.11}
              y2={370.26}
              gradientTransform='rotate(-22.87 371.358 245.195)'
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-17'
              x1={504.37}
              y1={345.64}
              x2={546.88}
              y2={396.65}
              gradientTransform='rotate(-22.87 371.358 245.195)'
              xlinkHref='#prefix__linear-gradient'
            />
            <linearGradient
              id='prefix__linear-gradient-18'
              x1={525.71}
              y1={347.04}
              x2={525.71}
              y2={394.03}
              gradientTransform='translate(36.08 -69.72)'
              xlinkHref='#prefix__linear-gradient-5'
            />
            <linearGradient
              id='prefix__linear-gradient-19'
              x1={501.69}
              y1={371.15}
              x2={522.05}
              y2={371.15}
              gradientTransform='rotate(-22.87 371.358 245.195)'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#2e302f' stopOpacity={0} />
              <stop offset={1} stopColor='#1c1e1d' />
            </linearGradient>
            <linearGradient
              id='prefix__linear-gradient-20'
              x1={383.39}
              y1={480.13}
              x2={432.42}
              y2={480.13}
              gradientTransform='rotate(-55.49 366.94 270.44)'
              xlinkHref='#prefix__linear-gradient-3'
            />
            <linearGradient
              id='prefix__linear-gradient-21'
              x1={386.24}
              y1={454.13}
              x2={431.13}
              y2={508}
              gradientTransform='rotate(-55.49 366.94 270.44)'
              xlinkHref='#prefix__linear-gradient'
            />
            <linearGradient
              id='prefix__linear-gradient-22'
              x1={408.77}
              y1={455.61}
              x2={408.77}
              y2={505.24}
              gradientTransform='translate(153.79 -124.85)'
              xlinkHref='#prefix__linear-gradient-5'
            />
            <linearGradient
              id='prefix__linear-gradient-23'
              x1={383.41}
              y1={481.08}
              x2={404.9}
              y2={481.08}
              gradientTransform='rotate(-55.49 366.94 270.44)'
              xlinkHref='#prefix__linear-gradient-19'
            />
            <linearGradient
              id='prefix__linear-gradient-24'
              x1={352.71}
              y1={260.12}
              x2={352.71}
              y2={514.05}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#141615' />
              <stop offset={0.43} stopColor='#282928' />
              <stop offset={1} stopColor='#484948' />
            </linearGradient>
            <radialGradient
              id='prefix__radial-gradient'
              cx={-17770.95}
              cy={-32378.58}
              r={1598.55}
              gradientTransform='matrix(.15 0 0 .01 2991 864.43)'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#666' />
              <stop offset={0.16} stopColor='#707070' stopOpacity={0.93} />
              <stop offset={0.4} stopColor='#8a8a8a' stopOpacity={0.74} />
              <stop offset={0.69} stopColor='#b6b6b6' stopOpacity={0.43} />
              <stop offset={1} stopColor='#f2f2f2' stopOpacity={0} />
            </radialGradient>
            <style>
              {
                '.prefix__cls-3,.prefix__cls-7{fill:#6d6d6d}.prefix__cls-7{opacity:.4}.prefix__cls-9{fill:#203647}.prefix__cls-10{fill:#12232E}.prefix__cls-14{fill:#191514}.prefix__cls-23{fill:#141615;opacity:.2}'
              }
            </style>
          </defs>
          <g
            style={{
              isolation: 'isolate',
            }}
          >
            <g id='prefix__object'>
              <path
                d='M632.28 586c0-7.62-104-13.79-232.27-13.79S167.72 578.35 167.72 586s104 13.8 232.29 13.8 232.27-6.21 232.27-13.8z'
                transform='translate(-167.72 -117.31)'
                style={{
                  mixBlendMode: 'multiply',
                }}
                opacity={0.5}
                fill='url(#prefix__radial-gradient)'
              />
              <path
                className='prefix__cls-3'
                d='M103.87 121.91l-10.4 5.62-58.2-101.72 1.24-2.72 67.36 98.82zM128.31 144.12l10.4 5.62 70.55-124.18-4.6-2.72-76.35 121.28z'
              />
              <path
                transform='rotate(-33.45 -69.746 371.815)'
                fill='url(#prefix__linear-gradient)'
                d='M202.9 138.25h12.85v26.29H202.9z'
              />
              <path
                transform='rotate(-61.13 196.112 215.268)'
                fill='url(#prefix__linear-gradient-2)'
                d='M366.16 125.5h26.29v12.85h-26.29z'
              />
              <path
                fill='url(#prefix__linear-gradient-3)'
                d='M98.58 467.38H82.67l5.16-43.85h22.35l-11.6 43.85z'
              />
              <path
                className='prefix__cls-7'
                d='M98.58 467.38h-5.59l7.74-43.85h9.45l-11.6 43.85z'
              />
              <path
                fill='url(#prefix__linear-gradient-4)'
                d='M365.98 467.38h15.91l-5.16-43.85h-22.36l11.61 43.85z'
              />
              <path
                className='prefix__cls-7'
                d='M365.98 467.38h5.59l-7.74-43.85h-9.46l11.61 43.85z'
              />
              <path
                className='prefix__cls-9'
                d='M583.14 537a12.89 12.89 0 01-12.9 12.9H229.75a12.89 12.89 0 01-12.89-12.9 12.89 12.89 0 0112.89-12.89h340.49a12.89 12.89 0 0112.9 12.89z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                className='prefix__cls-10'
                d='M34.52 114.85H430a25.79 25.79 0 0125.79 25.79v257.09a25.79 25.79 0 01-25.79 25.8H34.52a25.8 25.8 0 01-25.8-25.8V140.65a25.79 25.79 0 0125.8-25.8z'
              />
              <rect
                x={16.68}
                y={121.52}
                width={431.19}
                height={295.33}
                rx={21.52}
                fill='url(#prefix__linear-gradient-5)'
              />
              <rect
                x={21.2}
                y={126.04}
                width={422.16}
                height={286.3}
                rx={17}
                fill='url(#prefix__linear-gradient-6)'
              />
              <path
                d='M492.65 290.39c-63.89 9.68-128.41 14.61-193 16-31.59.7-63.27 1.17-94.87 1.17q-7.93 0-15.87-.23v128.5q8.19 0 16.39-.33c29.89-1 59.67-3.95 89.37-7.32 57.63-6.55 115.24-13.94 171.92-26.5 49.89-11.05 98.51-26 144.48-47.95v-89.2a956.18 956.18 0 01-118.42 25.86z'
                transform='translate(-167.72 -117.31)'
                opacity={0.3}
                fill='url(#prefix__linear-gradient-7)'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 274.86h46.86v4.08h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-8)'
                d='M370.56 282.88h46.86v4.08h-46.86z'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 290.89h46.86v4.08h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-9)'
                d='M370.56 298.9h46.86v4.07h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-10)'
                d='M370.56 306.91h46.86v4.08h-46.86z'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 314.92h46.86V319h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-11)'
                d='M370.56 322.93h46.86v4.08h-46.86z'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 330.94h46.86v4.08h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-12)'
                d='M370.56 338.95h46.86v4.08h-46.86z'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 346.96h46.86v4.08h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-13)'
                d='M370.56 354.98h46.86v4.08h-46.86z'
              />
              <path
                className='prefix__cls-14'
                d='M370.56 362.99h46.86v4.08h-46.86z'
              />
              <path
                fill='url(#prefix__linear-gradient-14)'
                d='M370.56 373.42h46.86v6.12h-46.86z'
              />
              <path
                d='M585 506.87h-50a8.12 8.12 0 01-8.14-8.08V275.51a8.12 8.12 0 018.14-8.08h50a8.12 8.12 0 018.14 8.08v223.28a8.12 8.12 0 01-8.14 8.08zm-50-238.14a6.81 6.81 0 00-6.82 6.78v223.28a6.81 6.81 0 006.82 6.77h50a6.81 6.81 0 006.82-6.77V275.51a6.81 6.81 0 00-6.82-6.78z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-15)'
              />
              <path
                className='prefix__cls-23'
                d='M581.41 295.13A23.21 23.21 0 11551 282.76a23.21 23.21 0 0130.41 12.37z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                d='M582.8 291.76a23.21 23.21 0 11-30.41-12.37 23.21 23.21 0 0130.41 12.37z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-16)'
              />
              <path
                className='prefix__cls-3'
                d='M579.79 293a19.94 19.94 0 11-26.13-10.63A19.95 19.95 0 01579.79 293z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                d='M577.38 294.05a17.33 17.33 0 11-22.7-9.24 17.34 17.34 0 0122.7 9.24z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-17)'
                opacity={0.7}
              />
              <path
                className='prefix__cls-10'
                d='M573.77 295.57a13.41 13.41 0 11-17.57-7.14 13.4 13.4 0 0117.57 7.14z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                transform='rotate(-22.87 187.889 655.489)'
                fill='url(#prefix__linear-gradient-18)'
                d='M558.11 280.92h7.36v37.28h-7.36z'
              />
              <path
                d='M551.15 283.82l-10.83 26.64A23.19 23.19 0 00561.44 324l3.46-7.63z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-19)'
                opacity={0.7}
              />
              <path
                className='prefix__cls-23'
                d='M572.37 339.11a24.52 24.52 0 11-34.09 6.31 24.52 24.52 0 0134.09-6.31z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                d='M576.85 335.32a24.52 24.52 0 11-34.1 6.31 24.52 24.52 0 0134.1-6.31z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-20)'
              />
              <path
                className='prefix__cls-3'
                d='M574.89 338.16a21.07 21.07 0 11-29.29 5.42 21.06 21.06 0 0129.29-5.42z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                d='M573.32 340.44a18.3 18.3 0 11-25.45 4.71 18.31 18.31 0 0125.45-4.71z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-21)'
                opacity={0.7}
              />
              <path
                className='prefix__cls-9'
                d='M571 343.85a14.16 14.16 0 11-19.69 3.65 14.16 14.16 0 0119.69-3.65z'
                transform='translate(-167.72 -117.31)'
              />
              <path
                transform='rotate(-55.3 369.762 457.058)'
                fill='url(#prefix__linear-gradient-22)'
                d='M558.71 334.54h7.77v39.37h-7.77z'
              />
              <path
                d='M544.17 346.27l5.53 29.87a24.52 24.52 0 0026.5 0l-1.27-8.76z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-23)'
                opacity={0.7}
              />
              <path
                d='M504.9 483.2c0 15.46-12.17 28-27.19 28h-250c-15 0-27.18-12.53-27.18-28V287.25c0-15.46 12.17-28 27.18-28h250c15 0 27.19 12.53 27.19 28z'
                transform='translate(-167.72 -117.31)'
                fill='url(#prefix__linear-gradient-24)'
              />
            </g>
            <path
              d='M498.88 478.93c0 14.85-11.69 26.89-26.11 26.89H232.64c-14.42 0-26.1-12-26.1-26.89V290.74c0-14.85 11.68-26.89 26.1-26.89h240.13c14.42 0 26.11 12 26.11 26.89z'
              transform='translate(-167.72 -117.31)'
              fill='#141615'
              id='prefix__screen'
            />
            <foreignObject x='40' y='150' width='290' height='230' rx='71'>
              {iOS ? '' : <Canvas />}
            </foreignObject>
          </g>
        </svg>
      </TvSetStyle>
    </Link>

  )
}