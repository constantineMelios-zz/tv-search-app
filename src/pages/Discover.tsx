import React from 'react'
import { DiscoverStyle } from '../styles'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })


export default function Discover() {
  console.log(process.env.REACT_APP_API_KEY)
  return <DiscoverStyle>

  </DiscoverStyle>
}