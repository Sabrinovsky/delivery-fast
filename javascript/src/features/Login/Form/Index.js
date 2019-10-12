import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from './login.module.css'; // Import css modules stylesheet as styles
import * as Yup from "yup";

export const LoginForm = ({onSubmit,error}) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email não é válido")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required")
          .required("Confirm Password is required")
      })}
      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form className='container' style={{marginTop: "200px"}}>

          <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
            <div id="formContent">
              <div className={`text-center mb-3 ${styles.fadeIn} ${styles.first}`}>
                <i className="far fa-user-circle fa-5x"></i>
              </div>

              <div className="form-group">
                <Field
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className={`form-control ${styles.fadeIn} ${styles.second} ${(errors.email && touched.email ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <Field
                  name="password"
                  type="text"
                  placeholder="Senha"
                  className={`form-control ${styles.fadeIn} ${styles.third} ${(errors.password && touched.password ? " is-invalid" : "")}`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group text-center">
              {error && <div class="alert alert-danger" role="alert">
                {error}
              </div>}
                <Field
                  type="submit"
                  placeholder="Senha"
                  value="Login"
                  className={`${styles.fadeIn} ${styles.fourth}`}
                />
              </div>

              <div id="formFooter">
                <a className={`${styles.underlineHover}`} href="#">Esqueceu sua senha?</a>
              </div>

            </div>
          </div>

        </Form>
      )}
    />
  );
};
