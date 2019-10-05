import React, { useEffect, useState } from 'react';
import request from '../../../../../services/request';
import styles from './styles.module.scss'

export const UserIndex = () => {
  const [users, setUsers] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    request
      .get('users')
      .then(setUsers)
      .catch(setHasError);
  }, []);

  return (
    <div className={`container ${styles.userIndex}`}>
      <h3>
        Listagem de usuários
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th className='col-sm-8' scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {!!users && users.map((user,key)=>
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className='pull-right'><a href='/admin/usuarios/'>Editar</a></td>
              <td className='pull-right'><a href='/admin/usuarios/' >Excluir</a></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
