import React from 'react'
import Header from './Header.js'

import { BrowserRouter , Link, Route, Switch} from 'react-router-dom'
import Login from '../pages/Login/login'
import Form from '../pages/Clients/components/Form'
const App = () => (
  <div>
<BrowserRouter>
<Header/>
  <Switch>
  <Route exact patch='/' component={Login}/>
  <Route exact patch='/Form' component={Form}/>  
  </Switch>
  </BrowserRouter>

  </div>
)

export default App
