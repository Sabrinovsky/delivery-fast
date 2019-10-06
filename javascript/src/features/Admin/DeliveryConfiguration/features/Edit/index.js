import React,{useState, useEffect} from 'react';
import request from '../../../../../services/request'
import { DeliveryConfigurationForm } from '../components/DeliveryConfigurationForm'
import { toast } from 'react-toastify';

export const DeliveryConfigurationEdit = () => {

  const [configuration,setConfiguration] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [success, setSucess] = useState(false)

  function onSubmit(values){
    request.put('delivery_configurations/1', {max_time: values.maxTime, radius: values.radius})
      .then(()=>{
        setSucess(true)
        toast.success('Cadastro realizado com sucesso!');
      })
      .catch(()=>{
        toast.error('Não foi possível cadastrar o produto');
      })
  }

  useEffect(()=>{
    request.get('delivery_configurations')
      .then((configuration)=>{
        setConfiguration({
          maxTime: configuration[0].max_time,
          radius: configuration[0].radius
        })
      })
      .catch(setHasError)
  },[])

  if (!configuration) return null
  return (
    <DeliveryConfigurationForm onSubmit={onSubmit} configuration={configuration}/>
  )
}
