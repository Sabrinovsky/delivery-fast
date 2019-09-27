import React,{useState, useEffect} from 'react';
import { UserProvider } from '../services/userContext'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import request from '../services/request'
import {AdminRouter} from './AdminRouter'

export const Routes = () => {

  const [user,setUser] = useState({authing: true, logged:false})

  useEffect(()=>{
    if(!user){
      request.get('auth')
        .then((res)=>{
          setUser({...res, logged:true})
        },[])
    }
  })

  return (
    <UserProvider value={user}>
        <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route path='/admin' component={AdminRouter} />
            </Switch>
        </Router>
    </UserProvider>
  )
}
