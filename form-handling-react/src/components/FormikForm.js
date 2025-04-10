import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    // Mock API call or form submission
    alert('Form submitted successfully!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field
            type="text"
            name="username"
          />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label>Email</label>
          <Field
            type="email"
            name="email"
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Password</label>
          <Field
            type="password"
            name="password"
          />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
