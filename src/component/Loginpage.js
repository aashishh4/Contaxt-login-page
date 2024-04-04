import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Loginpage() {
   const {setApivalue,Login}=useAuth();
   const navigate=useNavigate();
  const initialValues = {
    email: "",
    password: ""
  };

  function validateForm(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
     else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }

  var Product=[{id:1,name:"ram"},{id:2,name:"siya"}]

  function handleForm(values, actions) {
    const formData = {
      email: values.email,
      password: values.password
    };
    axios 
    .post('https://reqres.in/api/login',formData)
    .then(response=>{
        console.log(response)
        if(response.status===200){
            //  const ApiData=response.data;
            localStorage.setItem('product',JSON.stringify(Product))
             setApivalue(Product);
             Login();
             navigate('/bookpage')
        }
    })
   
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleForm}
      >
        <Form>
          <label>Email</label>
          <br />
          <Field type="text" name="email" placeholder="Enter your Email" />
          <br />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          <br />

          <label>Password</label>
          <br/>
          <Field type="password" name="password" placeholder="Enter your Password" />
          <br />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Loginpage;
