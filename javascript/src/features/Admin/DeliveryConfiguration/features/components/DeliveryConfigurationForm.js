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

export const DeliveryConfigurationForm = ({ onSubmit, configuration }) => {
  return (
    <Formik
      initialValues={configuration}
      validationSchema={Yup.object().shape({
        maxTime: Yup.string().required().matches(/^((?!-)(\d*,\d*)|\d)*$/, { message: 'Campo inválido', excludeEmptyString: true }),
        radius: Yup.string().required().matches(/^((?!-)(\d*,\d*)|\d)*$/, { message: 'Campo inválido', excludeEmptyString: true })
      })}
      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <>
          <PageName title="Configuração da entrega" icon="wrench" />
          <Form className={`container ${styles.form}`}>
            <div className="form-group text-center">
              <label>Tempo Máximo</label>
              <Field
                name="maxTime"
                className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.maxTime && touched.maxTime ? " is-invalid" : "")}`}
              />

              <ErrorMessage
                name="maxTime"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group text-center">
              <label>Radio de sugestão</label>
              <Field
                name="radius"
                className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.radius && touched.radius ? " is-invalid" : "")}`}
              />
              <ErrorMessage
                name="radius"
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
        </>
      )}
    />
  );
};
