import React, { useEffect, useState } from 'react';
import request from '../../../../../services/request';
import styles from './styles.module.scss'
import PageName from '../../../../../components/PageName';

export const ProductIndex = () => {
  const [products, setProducts] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    request
      .get('products')
      .then(setProducts)
      .catch(setHasError);
  }, []);

  return (
    <>
      <PageName title={"Lista de Produtos"} icon={"cube"} />
      <div className={`container ${styles.userIndex}`}>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) =>
              <tr key={key}>
                <td>{product.code}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <a href='#' className="btn btn-sm btn-warning">
                    <i className="fa fa-edit"></i>
                  </a>
                </td>
                <td>
                  <a href='#' className="btn btn-sm btn-danger">
                    <i className="fa fa-close"></i>
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
