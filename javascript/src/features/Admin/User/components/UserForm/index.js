import React,{useContext} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './styles.module.scss'
import PageName from "../../../../../components/PageName";
import UserConsumer from './../../../../../services/userContext'

const kindOptions = (kind) =>{

  if(kind=='clerk'){
    return(<option value='customer'>Cliente</option>)
  }else{
    return(
      <>
        <option value='manager'>Gerente</option>
        <option value='customer'>Cliente</option>
        <option value='clerk'>Atendente</option>
      </>
    )
  }

}

export const UserForm = ({ onSubmit, initialValues }) => {
  const user = useContext(UserConsumer)

  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: '',
        kind:'',
        password: '',
        password_confirmation: ''
      }}

      validationSchema={Yup.object().shape({
        name: Yup.string().required,
        username: Yup.string().required,
        email: Yup.string().required,
        password: Yup.string().required,
        password: Yup.string().required,
      })}

      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <>
          <PageName title="Cadastro de produto" icon="list" />
          <Form className={`container ${styles.form}`}>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label teste">Código</label>
              <div class="col-sm-10">
                <Field
                  name="name"
                  className={`form-control  ${(errors.name && touched.name ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Descrição</label>
              <div class="col-sm-10">
                <Field
                  name="username"
                  className={`form-control ${(errors.username && touched.username ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Preço</label>
              <div class="col-sm-10">
                <Field
                  name="email"
                  className={`form-control  ${(errors.email && touched.email ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Preço</label>
              <div class="col-sm-10">
                <select
                  name="kind"
                  className={`form-control ${(errors.kind && touched.kind ? " is-invalid" : "")}`}
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
              <label className="col-sm-2 col-form-label">Preço</label>
              <div class="col-sm-10">
                <Field
                  name="password"
                  className={`form-control ${(errors.password && touched.password ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Preço</label>
              <div class="col-sm-10">
                <Field
                  name="password_confirm"
                  className={`form-control  ${(errors.password_confirm && touched.password_confirm ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="password_confirm"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group text-center">
              <button
                type='submit'
                value="Cadastrar"
                name='submit'
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
