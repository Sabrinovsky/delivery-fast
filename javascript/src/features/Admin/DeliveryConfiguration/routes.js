import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  { DeliveryConfigurationEdit }  from './features/Edit'

export const DeliveryConfigurationRoutes = ({match}) => {
  return (
      <Router>
        <Switch>
          <Route  path={`${match.url}/editar`} component={DeliveryConfigurationEdit}/>
        </Switch>
      </Router>
  )
}
