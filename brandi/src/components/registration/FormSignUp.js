import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./tes.css";

const FormSignUp = () => {
  const initialValues = { name: "", username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [btnSignup, setBtnSignup] = useState({text:"Sign Up", disable:false});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var is_valid = validate(formValues);
    if (Object.keys(is_valid).length > 0) {
      setFormErrors(validate(formValues));
      setBtnSignup({...btnSignup, text:"Sign Up", disable:false});
    } else {
      setBtnSignup({...btnSignup, text:"Processing..", disable:true});
      console.log("benar");
      postUser(formValues);
    }
  };

  const postUser = (param) => {
    var data = JSON.stringify(param);

    var config = {
      method: "post",
      url: "http://localhost:8080/api/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if(Object.values(response.data).length > 0){ // check responce from api key data is not null
          const results = response.data;
          console.log(results);
          if(results.result){
            setBtnSignup({...btnSignup, text:"Finish", disable:false});
            //for redirect to other page
            setTimeout(()=>{
              window.location.href = "/home";
            },1000);
            //end redirect
          }else{
            setBtnSignup({...btnSignup, text:"Try again", disable:false});
          }
        }else{ //check responce from api is null
          setBtnSignup({...btnSignup, text:"Failed saved. Try again", disable:true});
        }
      })
      .catch(function (error) {
        alert(error);
        setBtnSignup({...btnSignup, text:"Try again", disable:false});
      });
  };

  useEffect(() => {
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container bg-white-ash mt-5 pt-5">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="bg-coral text-white py-2 px-4">
          Your account has been created
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <h1 className="fw-semi-bold fs-2 w-50">
          Sign up to <span className="fw-bold">brandi</span>
        </h1>
        <div className="coral lines rounded-5 mb-5" />
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
            className="w-100 rounded-pill border-none input-border py-2 px-2 ps-4 fw-regular"
          />
          <p>{formErrors.name}</p>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            className="w-100 rounded-pill input-border py-2 px-2 ps-4 fw-regular"
          />
          <p>{formErrors.username}</p>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            className="w-100 rounded-pill input-border py-2 px-2 ps-4 fw-regular"
          />
          <p>{formErrors.email}</p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            className="w-100 rounded-pill input-border p-2 ps-4 fw-regular"
          />
          <p>{formErrors.password}</p>

          <div className="d-grid mt-5 mb-3">
            <button
              type="submit"
              className="rounded-pill text-white p-2 bg-coral fw-bold"
              disabled={btnSignup.disable}
            >
              {btnSignup.text}
            </button>
          </div>

          <p className="text-center fw-regular mb-4">
            Have an account?
            <NavLink to="/sign-in" className="text-decoration-none">
              <span className="text-coral fw-bold cursor-pointer">
                {" "}
                Sign in
              </span>
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
