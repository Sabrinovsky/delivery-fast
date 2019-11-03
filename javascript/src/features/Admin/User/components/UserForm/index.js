import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.scss';
import PageName from '../../../../../components/PageName';
import UserConsumer from './../../../../../services/userContext';

const kindOptions = kind => {
  if (kind === 'clerk') {
    return <option value="customer">Cliente</option>;
  } else {
    return (
      <>
        <option value="manager">Gerente</option>
        <option value="customer">Cliente</option>
        <option value="clerk">Atendente</option>
        {kind === 'admin' &&
        <option value="admin">Administrador</option>
        }
      </>
    );
  }
};

const setSelectValue = (setFieldValue, {target}) =>{
  setFieldValue(target.name,target.value)
}

export const UserForm = ({ onSubmit, initialValues }) => {
  const user = useContext(UserConsumer);
  const required = 'Campo é obrigatório'
  console.log(initialValues)
  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        kind: '',
        password: '',
        passwordConfirm: ''
      }, {...initialValues}}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(required),
        username: Yup.string().required(required),
        email: Yup.string().email('Insira um email válido').required(required),
        password: Yup.string().required('Password is required'),
        password: Yup
          .string()
          .label('Password')
          .required(required)
          .min(2, 'Seems a bit short...')
          .max(10, 'We prefer insecure system, try a shorter password.'),
        passwordConfirm: Yup
          .string()
          .required(required)
          .label('Confirm password')
          .test('passwords-match', 'Passwords must match ya fool', function(value) {
            return this.parent.password === value;
          })
      })}
      onSubmit={onSubmit}
      render={({ setFieldValue, errors, status, touched, isSubmitting }) => (
        <>
          <PageName title="Cadastro de produto" icon="list" />
          <Form className={`container ${styles.form}`}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label teste">Nome</label>
              <div class="col-sm-10">
                <Field
                  name="name"
                  className={`form-control  ${
                    errors.name && touched.name ? ' is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Usuário</label>
              <div class="col-sm-10">
                <Field
                  name="username"
                  className={`form-control ${
                    errors.username && touched.username ? ' is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <Field
                  name="email"
                  className={`form-control  ${
                    errors.email && touched.email ? ' is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Perfil</label>
              <div class="col-sm-10">
                <select
                  onChange={(target) =>setSelectValue(setFieldValue, target)}
                  name="kind"
                  className={`form-control ${
                    errors.kind && touched.kind ? ' is-invalid' : ''
                  }`}
                >
                  {kindOptions(user.kind)}
                </select>
                <ErrorMessage
                  name="kind"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Senha</label>
              <div class="col-sm-10">
                <Field
                  name="password"
                  className={`form-control ${
                    errors.password && touched.password ? ' is-invalid' : ''
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Confirmar senha</label>
              <div class="col-sm-10">
                <Field
                  name="passwordConfirm"
                  className={`form-control  ${
                    errors.passwordConfirm && touched.passwordConfirm
                      ? ' is-invalid'
                      : ''
                  }`}
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group text-center">
              <button
                type="submit"
                value="Cadastrar"
                name="submit"
                className="btn btn-info"
              >
                Cadastrar
              </button>
            </div>
          </Form>
        </>
      )}
    />
  );
};
