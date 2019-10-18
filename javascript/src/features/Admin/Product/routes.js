import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import  { ProductIndex }  from './features/Index'
import  { ProductNew }  from './features/New'

export const ProductRoutes = ({match}) => {
  console.log(`${match.url}/novo`)
  return (
      <Router>
        <Switch>
          <Route path={`${match.url}/novo`} component={ProductNew}/>
          <Route  path={`${match.url}/`} component={ProductIndex}/>
        </Switch>
      </Router>
  )
}
export default withRouter(ProductRoutes)
