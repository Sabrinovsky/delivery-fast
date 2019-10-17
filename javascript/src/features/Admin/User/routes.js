import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import  { UserIndex }  from './features/Index'

export const UserRoutes = ({match}) => {
  return (
      <Router>
        <Switch>
          <Route  path={`${match.url}/`} component={UserIndex}/>
        </Switch>
      </Router>
  )
}
