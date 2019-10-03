import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  { ProductIndex }  from '../index.js'
import  { ProductNew }  from '../new/index.js'
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
