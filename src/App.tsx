import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BurgerMenu, Footer } from './components'
import { Discover, Home } from './pages'
import { GlobalStyle } from './styles'



function App() {
  return (
    <>
      <GlobalStyle />
      <BurgerMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/discover">
          <Discover />
          <Footer />
        </Route>
      </Switch>
    </>
  )


}

export default App
