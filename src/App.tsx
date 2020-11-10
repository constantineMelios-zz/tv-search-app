import React from 'react'
import { BurgerMenu } from './components'
import { Home } from './pages'
import { GlobalStyle } from './styles'



function App() {
  return (
    <>
      <GlobalStyle />
      <BurgerMenu />
      <Home />
    </>
  )


}

export default App
