import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/private/Home'
import Login from './pages/public/Login/Login'

import RoutesPrivate from './components/Routes/Private/Private'

import StoreProvider from './services/Provider'

function Routes() {
 return (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route exact path='/' component={Login}/>
        <RoutesPrivate path='/home' component={Home}/>
      </Switch>
    </StoreProvider>
  </BrowserRouter>
 )
}

export default Routes