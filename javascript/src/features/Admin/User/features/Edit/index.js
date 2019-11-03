import React, { useState, useEffect } from 'react'
import { UserForm } from '../../components/UserForm/index'
import { toast } from 'react-toastify';
import request from '../../../../../services/request'
import { Redirect } from 'react-router-dom'

export const UserEdit = ({match}) =>{

  const [sucess, setSucess] = useState(false)
  const [user,setUser] = useState(false)

  function onSubmit(values){
    const {id} = match.params

    request.put(`users/${id}`, values)
      .then(()=>{
        setSucess(true)
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(()=>{
        toast.error('Não foi possível cadastrar o produto');
      })
  }

  useEffect(()=>{
    const {id} = match.params
    request.get(`users/${id}`)
      .then(setUser)
      .catch(console)
  },[])

  if (!user) return null;
  return(
    <React.Fragment>
      {sucess &&  <Redirect to='/admin/usuarios'/>}
      <UserForm initialValues={user} onSubmit={onSubmit} />
    </React.Fragment>
  )
}
