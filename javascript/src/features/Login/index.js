import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginForm } from './Form/Index'
import cookies from '../../services/cookies'
import request from '../../services/request'


export const Login = () =>{

  const [loginSuccess, setLogginSuccess] = useState(false)

  function onSubmit(values){

    request.post('auth/login', values)
      .then((res)=>{
        setLogginSuccess(true)
        cookies.set('jwt',res.token)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return(
    <div>
      {loginSuccess && <Redirect to='/admin' />}
      <LoginForm onSubmit={onSubmit}/>
    </div>
  )
}
