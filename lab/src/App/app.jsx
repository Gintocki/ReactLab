import React from 'react'
import Header from './Header'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import Login from '../pages/Login/login'
import Main from "../pages/Clients/main"
const App = () => (
  <div>
<BrowserRouter>
<Header/>
  <Switch>
  <Route exact path='/' component={Login}/>
  <Route path='/Main' component={Main}/>  
  </Switch>
  </BrowserRouter>
  </div>
)

export default App
