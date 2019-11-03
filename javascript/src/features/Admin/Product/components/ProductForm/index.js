import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './styles.module.scss'
import PageName from "../../../../../components/PageName";

Yup.setLocale({
  mixed: {
    default: 'Não é válido'
  }
});

export const ProductForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={{
        code: "",
        description: "",
        price: ''
      }}
      validationSchema={Yup.object().shape({
        code: Yup.number()
          .positive('Número precisa ser positivo')
          .typeError('Código deve ser um número')
          .integer()
          .required("Código é obrigatório"),
        description: Yup.string(),
        price: Yup.string()
          .required('Preço é obrigatório')
          .matches(/(\d*,\d*)|\d/, { message: 'Campo inválido', excludeEmptyString: true })
      })}
      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <>
          <PageName title="Cadastro de produto" icon="list" />
          <Form className={`container ${styles.form}`}>

            <div class="form-group row">
              <label className="col-sm-2 col-form-label teste">Código</label>
              <div class="col-sm-10">
                <Field
                  name="code"
                  className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.code && touched.code ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="code"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Descrição</label>
              <div class="col-sm-10">
                <Field
                  name="description"
                  className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.description && touched.description ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Preço</label>
              <div class="col-sm-10">
                <Field
                  name="price"
                  className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.price && touched.price ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="price"
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
