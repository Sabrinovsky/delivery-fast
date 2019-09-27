import React,{useState, useEffect} from 'react';
import UserContext from '../../services/userContext'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'

export const AdminRouter = () => {
  const user = React.useContext(UserContext)
  console.log(user)
  if(user.authing && !user.isLogged){
    return <Redirect to='/login' />
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/admin' component={()=><h1>admin</h1>}/>
      </Switch>
    </Router>
  )
}
