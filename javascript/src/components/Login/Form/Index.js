import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const LoginForm = ({onSubmit}) => {
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
        <Form className='container'>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={
                "form-control" +
                (errors.password && touched.password ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <button disabled={isSubmitting} className="btn btn-primary mr-2">
              Login
            </button>
          </div>
        </Form>
      )}
    />
  );
};
