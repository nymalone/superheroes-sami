import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import AllHeroes from './pages/AllHeroes'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/all-heroes' component={AllHeroes} />
    </BrowserRouter>
  )
}

export default Routes
