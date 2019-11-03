import React, { useEffect, useState } from 'react';
import request from '../../../../../services/request';
import styles from './styles.module.scss'
import PageName from '../../../../../components/PageName';
import { toast } from 'react-toastify';

export const ProductIndex = () => {
  const [products, setProducts] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleChangeActive = (productId, e) =>{
    request.put(`products/${productId}`, {active: e.target.checked})
    .catch(()=>{
      toast.error('Não foi possível fazer a alteração.\nRecarregue a página')
    })
  }

  useEffect(() => {
    request
      .get('products')
      .then(setProducts)
      .catch(setHasError);
  }, []);

  if(hasError) console.log(hasError)

  return (
    <>
      <PageName title={"Lista de Produtos"} icon={"cube"} />
      <div className={`container ${styles.userIndex}`}>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Ativo</th>
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
                <td>
                  <input type='checkbox' onChange={(e)=>handleChangeActive(product.id,e)} defaultChecked={product.active} ></input>
                </td>
                <td>{product.code}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <a href='/' className="btn btn-sm btn-warning">
                    <i className="fa fa-edit"></i>
                  </a>
                </td>
                <td>
                  <a href='/' className="btn btn-sm btn-danger">
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
