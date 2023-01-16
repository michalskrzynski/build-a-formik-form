import React from "react";
import { useFormik } from "formik";

function App() {
  const validateEmail = (mail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( mail );
  }


  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },

    onSubmit: (values) => {
      alert('Login Successful')
    },

    validate: (values) => {
      let errors = {};

      if( values.emailField === '' ) errors.emailField = 'Field required';
      else if( !validateEmail( values.emailField ) ) errors.emailField = 'Username should be an email'; 
      
      if( !values.pswField ) errors.pswField = 'Field required';
       
      return errors;
    }
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="emailField"
            id="emailField"
            value={formik.values.emailField}
            onChange={formik.handleChange}
          />
          {formik.errors.emailField ? <div id="emailError"> {formik.errors.emailField}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="pswField"
            id="pswField"
            value={formik.values.pswField}
            onChange={formik.handleChange}
          />
          {formik.errors.pswField ? <div id="pswError"> {formik.errors.pswField}</div> : null}
        </div>
        <button id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
