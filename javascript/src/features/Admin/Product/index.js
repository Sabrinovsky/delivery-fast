import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  { ProductIndex }  from './features/Index'
import  { ProductNew }  from './features/New'

export const ProductRoutes = ({match}) => {
  return (
      <Router>
        <Switch>
          <Route  path={`${match.url}/novo`} component={ProductNew}/>
          <Route  path={`${match.url}/`} component={ProductIndex}/>
        </Switch>
      </Router>
  )
}
