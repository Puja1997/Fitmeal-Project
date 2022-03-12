import React from "react";
import "./Login.css";
import "../Footer/Footer.js";
import Footer from "../Footer/Footer.js";
import axios from "axios";
import { useFormik } from "formik";
import { Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const validateForm = (formValue) => {
  const errors = {};
  const reg_exp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  //   if (!formValue.username) {
  //     errors.username = "enter the username";
  // }
  // else if (formValue.username.length < 5) {
  //     errors.username = "minimum length 5";
  // }

  if (!formValue.email) {
    errors.email = "enter the email";
  } else if (!reg_exp.test(formValue.email)) {
    errors.email = "invalid email";
  }
  if (!formValue.password) {
    errors.password = "enter the password";
  } else if (reg_exp.test(formValue.password)) {
    errors.password = "Invalid password";
  }

  //  if (password.test(formValue.ConfirmPassword)) {
  //   errors.password = "Invalid password"
  // }

  console.log(errors);
  return errors;
};

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // userName:"",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("https://project-node-1.herokuapp.com/postLoginData", values)
        .then((res) => {
          // console.log("axius res", res);
          console.log("axius res", res.data);
          window.localStorage.setItem("Token", res.data.token);
          window.sessionStorage.setItem("Token", res.data.token);
          alert("you are login");
          navigate("/Health");
        })
        .catch((err) => {
          console.log("error in axius", err);
        });
    },
  });

  return (
    <div>
      {/* <img src="img_forest.jpg" alt="Forest" width="170" height="100"/> */}

      <div className="images_login">
        <div className="box_login"></div>
      </div>

      {/* <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/testimonials-bg.png" style={{ width: "1330px" }} /> */}
      <div style={{ border: "1px solid black" }} className="back_image">
        <div className="container">
          <div className="form">
            <div className="btn">
              {/* <button className="signUpBtn">SIGN UP</button> */}
              <button className="loginBtn">LOG IN</button>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="signUp"
              action=""
              method="get"
            >
              <div className="formGroup">
                <input
                  type="email"
                  placeholder="Email ID"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  required
                  autocomplete="off"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span>{formik.errors.email}</span>
                ) : null}
                <br />
              </div>
              <div className="formGroup">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  required
                  autocomplete="off"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span>{formik.errors.password}</span>
                ) : null}
                <br />
              </div>
              <div className="formGroup">
                <input
                  type="password"
                  id="confirmPassword"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={formik.values.ConfirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  autocomplete="off"
                />
                {formik.touched.ConfirmPassword &&
                formik.errors.ConfirmPassword ? (
                  <span>{formik.errors.ConfirmPassword}</span>
                ) : null}
                <br />
              </div>
              <div className="checkBox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="text">I agree with term & conditions</span>
              </div>
              <div className="formGroup">
                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <p className="reg-tag">
          Don't have an account yet? Register
          <Nav.Link as={Link} to="/registration">
            Here.
          </Nav.Link>
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
