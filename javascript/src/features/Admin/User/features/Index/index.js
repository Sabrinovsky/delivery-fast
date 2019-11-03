import React, { useEffect, useState } from 'react';
import request from '../../../../../services/request';
import styles from './styles.module.scss'
import PageName from '../../../../../components/PageName';
import { Link } from 'react-router-dom'




export const UserIndex = () => {
  const [users, setUsers] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [refetch,setRefetch] = useState(false)

  const handleDelete = (id) => {
    const teste = window.confirm('Deseja realmente excluir?')
    if(teste){
      request.delete(`users/${id}`)
      .then(()=>{
        setRefetch(true)
        console.log('deletado')
      })
      .catch((erros)=>{
        console.log(erros)
      })
    }
  }

  useEffect(() => {
    request
      .get('users')
      .then(setUsers)
      .catch(setHasError);
    setRefetch(false)
  }, [refetch]);

  if(hasError) console.log(hasError)

  return (
    <>
      <PageName title={"Lista de Usuários"} icon={"users"} />
      <div className={`container ${styles.userIndex}`}>
        <span className='btn btn-success'>
          <Link  to={'/admin/usuarios/novo'}>Incluir</Link>
        </span>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th className='col-sm-8' scope="col">E-mail</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!!users && users.map((user, key) =>
              <tr key={key}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className='pull-right'><Link to={`/admin/usuarios/${user.id}/editar`}>Editar</Link></td>
                <td className='pull-right'><button onClick={()=>{handleDelete(user.id)}} >Excluir</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
