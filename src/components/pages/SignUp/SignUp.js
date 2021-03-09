import React from "react";
import "./SignUp.css";
import { useFormik } from "formik";
import { signUpUser, validateUser } from "../../../action/general-action";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

function SignUp() {
  const { addToast } = useToasts();
  let history = useHistory();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
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
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passward did not match";
    } else if (values.confirmPassword.length > 20) {
      errors.confirmPassword = "Must be 20 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^[1-9]+[0-9]{9}$/i.test(values.phone)) {
      errors.phone = "Invalid Phone number";
    } else if (values.phone.length !== 10) {
      errors.phone = "Must be 10 digits";
    }
    return errors;
  };

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
      validateUser(values.email).then((res) => {
        if (res) {
          signUpUser(
            values.username,
            values.email,
            values.password,
            values.phone
          )
            .then(() => {
              console.log("sucesss");
              addToast("User is successfully resgister", {
                appearance: "success",
              });
              setTimeout(function () {
                history.push("/login");
              }, 3000);
            })
            .catch((err) => {
              addToast("Something went wrong. Try again", {
                appearance: "error",
              });
              console.log(err);
            });
        }
        if (!res) {
          addToast("User already exist", {
            appearance: "error",
          });
        }
      });
    },
  });
  // console.log(formik.errors);
  return (
    <div className="signUp">
      <img
        className="signUp__backgroundImage"
        src="/images/signUpBg.jpg"
        alt="background"
      />
      <form className="signUp__form" onSubmit={formik.handleSubmit}>
        <div className="signUp__title f-head">SIGN UP</div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label f-text">Email Address</label>
            <input
              className="signUp__input"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="signUp--error ">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label f-text">Username</label>
            <input
              className="signUp__input"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="signUp--error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label f-text">Password</label>
            <input
              className="signUp__input"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="signUp--error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label f-text">Confirm Password</label>
            <input
              className="signUp__input"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="signUp--error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className="signUp__fields">
          <div className="signUp__form--inputArea">
            <label className="signUp__label f-text">Phone </label>
            <input
              className="signUp__input"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="signUp--error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <button className="signUp__button f-text" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SignUp;
