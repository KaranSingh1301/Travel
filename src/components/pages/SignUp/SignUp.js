import React from "react";
import "./SignUp.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password != values.confirmPassword) {
    errors.confirmPassword = "Passward did not match";
  } else if (values.confirmPassword.length > 20) {
    errors.confirmPassword = "Must be 20 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length != 10) {
    errors.phone = "Must be 20 characters or less";
  }
  return errors;
};

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signUp">
      <img className="signUp__backgroundImage" src="/images/signUpBg.jpg" />
      <form className="signUp__form" onSubmit={formik.handleSubmit}>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label">Email Address</label>
            <input
              className="signUp__input"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? (
            <div className="signUp--error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label">Username</label>
            <input
              className="signUp__input"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          {formik.errors.username ? (
            <div className="signUp--error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label">Passward</label>
            <input
              className="signUp__input"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? (
            <div className="signUp--error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label">Confirm Password</label>
            <input
              className="signUp__input"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          {formik.errors.confirmPassword ? (
            <div className="signUp--error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label">Phone </label>
            <input
              className="signUp__input"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
        </div>
        <button className="signUp__button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SignUp;
