import React, { useState } from 'react'
import { UserForm } from '../../components/UserForm/index'
import { toast } from 'react-toastify';
import request from '../../../../../services/request'
import { Redirect } from 'react-router-dom'

export const UserNew = () =>{

  const [sucess, setSucess] = useState(false)

  function onSubmit(values){
    request.post('users', values)
      .then(()=>{
        setSucess(true)
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(()=>{
        toast.error('Não foi possível cadastrar o produto');
      })
  }

  return(
    <React.Fragment>
      {sucess &&  <Redirect to='/admin/usuarios'/>}
      <UserForm onSubmit={onSubmit} />
    </React.Fragment>
  )
}
