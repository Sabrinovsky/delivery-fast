import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import  { UserIndex }  from './features/Index'
import  { UserNew }  from './features/New'
import  { UserEdit }  from './features/Edit'

export const UserRoutes = ({match}) => {
  return (
      <Router>
        <Switch>
          <Route  path={`${match.url}/novo`} component={UserNew}/>
          <Route  path={`${match.url}/:id(\\d+)/editar`} component={UserEdit}/>
          <Route  path={`${match.url}/`} component={UserIndex}/>
        </Switch>
      </Router>
  )
}
