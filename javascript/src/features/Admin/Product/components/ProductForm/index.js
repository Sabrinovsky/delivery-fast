import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './styles.module.scss'

Yup.setLocale({
  mixed: {
    default: 'Não é válido',
  },
  number: {
    integer: '${path} must be an integer'
  },
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
          .typeError('Código deve ser um número')
          .integer()
          .required("Código é obrigatório"),
        description: Yup.string(),
        price: Yup.string()
          .required('Preço é obrigatório')
      })}
      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form className={`container ${styles.form}`} style={{ marginTop: "200px" }}>
              <div className="form-group text-center">
                <label>Código</label>
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

              <div className="form-group text-center">
              <label>Descrição</label>
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

              <div className="form-group text-center">
              <label>Preço</label>
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

              <div className="form-group text-center">
                <button
                  type='submit'
                  value="Cadastrar"
                  name='submit'
                >
                  Cadastrar
                </button>
              </div>
        </Form>
      )}
    />
  );
};
