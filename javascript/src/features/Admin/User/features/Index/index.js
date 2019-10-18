import React, { useEffect, useState } from 'react';
import request from '../../../../../services/request';
import styles from './styles.module.scss'
import PageName from '../../../../../components/PageName';

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
    <>
      <PageName title={"Lista de Usuários"} icon={"users"} />
      <div className={`container ${styles.userIndex}`}>
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
                <td className='pull-right'><a href='/admin/usuarios/'>Editar</a></td>
                <td className='pull-right'><a href='/admin/usuarios/' >Excluir</a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
