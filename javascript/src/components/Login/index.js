import React from 'react'
import { LoginForm } from './Form/Index'
import axios from 'axios'
import cookies from '../../services/cookies'
import request from '../../services/request'
import UserContext from '../../services/userContext'

const url = 'http://localhost:3001/auth/login'

export const Login = () =>{

  const user = React.useContext(UserContext)

  console.log(user) // { name: 'Tania', loggedIn: true }

  function onSubmit(values){
    axios.post(url, values, {
      headers:{
        Accept: 'application/json'
      }
    }).then(res =>{
      cookies.set('jwt',res.data.token)
    }).catch(err =>{
      console.log(err)
    })

  }

  function onClick(){
    request.get('auth')
      .then((res)=>{
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
  }

  return(
    <div>
      <LoginForm onSubmit={onSubmit}/>
      <button onClick={onClick}> teste</button>
    </div>
  )
}
