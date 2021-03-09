import React, { useContext } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { loginUser } from "../../../action/general-action";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { TravelContext } from "../../../context";

function Login() {
  //context
  const { TOKEN, Auth } = useContext(TravelContext);
  //AUTH
  const [token, setToken] = TOKEN;

  //backend stuff
  const { addToast } = useToasts();
  let history = useHistory();

  //compont code
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be atleast 6 characters";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      loginUser(values.email, values.password)
        .then((res) => {
          if (res) {
            addToast(res.message, {
              appearance: "success",
            });
            setTimeout(() => {
            sessionStorage.setItem("token", JSON.stringify(values.email));
            setToken(Auth);
            Auth && history.push("/dashboard");
            }, 1500);
            
          }
          
        })
        .catch((err) => {
          addToast(err.response.data.message, {
            appearance: "error",
          });
        });
    },
  });
  return (
    <div className="login">
      <img
        className="login__backgroundImage"
        src="/images/loginBg.jpg"
        alt="background"
      />
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <div className="login__title f-head">LOGIN</div>
        <div className="login__fields">
          <div className="login__form--inputArea">
            <label className="login__label f-text">Email Address</label>
            <input
              className="login__input"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="login--error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="login__fields">
          <div className="login__form--inputArea">
            <label className="login__label f-text">Password</label>
            <input
              className="login__input"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="login--error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button className="login__button f-text" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
