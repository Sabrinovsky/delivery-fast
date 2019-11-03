import React, { useState } from 'react'
import { ProductForm } from '../../components/ProductForm/index'
import { toast } from 'react-toastify';
import request from '../../../../../services/request'
import { Redirect } from 'react-router-dom'

export const ProductNew = () =>{

  const [sucess, setSucess] = useState(false)

  function onSubmit(values){
    request.post('products', values)
      .then(()=>{
        setSucess(true)
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(()=>{
        toast.error('Código informado já existe no sistema ');
      })
  }

  return(
    <React.Fragment>
      {sucess &&  <Redirect to='/admin/produtos'/>}
      <ProductForm onSubmit={onSubmit} />
    </React.Fragment>
  )
}
