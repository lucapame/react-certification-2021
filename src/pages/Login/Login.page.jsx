/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import loginApi from '../../apis/login.api';
import { useAuth } from '../../providers/Auth';
import { FormWrapper, LogoImg } from './Styled/styled-components';
import { Button } from '../../components/Common/StyledComponets';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function LoginPage() {
  const { login } = useAuth();
  const [loading, setloading] = useState(false);

  const onLogin = (values) => {
    setloading(true);
    loginApi(values)
      .then((result) => {
        login(result);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormWrapper className="container-fluid d-fex flex-column align-items-center text-center justify-content-center">
      <LogoImg src="/images/logo.svg" alt="logo" height="70" />

      <h1 className="my-4 fw-light">
        Sign in on your <strong className="fw-bold">wavel</strong> account
      </h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onLogin}
      >
        {() => (
          <Form>
            <div className="form-section  row container-fluid text-start ">
              <div className="col-12 my-3 ">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Field name="username" id="username">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="text"
                        placeholder="Username"
                        className={`form-control ${
                          meta.touched && meta.error ? 'is-invalid' : ''
                        }`}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="text-danger">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="col-12 my-3 ">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field name="password" id="password">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        className={`form-control ${
                          meta.touched && meta.error ? 'is-invalid' : ''
                        }`}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="text-danger">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Button
                  type="submit"
                  className="btn w-100 btn-block mt-5"
                  btnType="primary"
                >
                  {!loading ? (
                    'Continue'
                  ) : (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden" />
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}

export default LoginPage;
