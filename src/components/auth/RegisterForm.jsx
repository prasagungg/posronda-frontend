import React from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import { connect } from "react-redux";
import { signUp } from "../../redux/actions";
import withFormik from "../../utils/withFormik";
import Spinner from "../base/Spinner";

const initialValues = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const schemeValidations = Yup.object().shape({
  name: Yup.string().trim().required("Please enter your name"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Please enter your email"),
  username: Yup.string().trim().required("Please enter your username"),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "A password contains at least eight characters, including at least one number and includes both lower and uppercase letters."
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .trim()
    .required("Please enter your confirm password"),
});

const handleRegister = async (payload, ctx) => {
  const { username, password, name, email } = payload;

  ctx.props.signUp({
    payload: {
      email,
      username,
      password,
      name,
    },
    onError: (msg) => {
      for (const key in msg) {
        ctx.setFieldError(key, msg[key]);
      }
    },
  });
};

function RegisterForm(props) {
  const { values, touched, errors, handleChange, handleSubmit } = props;
  const { loading } = useSelector((state) => state.global);

  const error = (val) => Boolean(touched[val] && errors[val]);

  return (
    <form className="py-4 w-full" onSubmit={handleSubmit}>
      <div className="py-1">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className={
            "input input-bordered w-full " +
            (error("name") ? "input-error" : "")
          }
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
        />
        {error("name") && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.name}</span>
          </label>
        )}
      </div>
      <div className="py-1">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={
            "input input-bordered w-full " +
            (error("username") ? "input-error" : "")
          }
          value={values.username}
          onChange={handleChange}
          autoComplete="off"
        />
        {error("username") && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.username}</span>
          </label>
        )}
      </div>
      <div className="py-1">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={
            "input input-bordered w-full " +
            (error("email") ? "input-error" : "")
          }
          value={values.email}
          onChange={handleChange}
          autoComplete="off"
        />
        {error("email") && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.email}</span>
          </label>
        )}
      </div>
      <div className="py-1">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={
            "input input-bordered w-full " +
            (error("password") ? "input-error" : "")
          }
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
        />
        {error("password") && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.password}</span>
          </label>
        )}
      </div>
      <div className="py-1">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={
            "input input-bordered w-full " +
            (error("confirmPassword") ? "input-error" : "")
          }
          value={values.confirmPassword}
          onChange={handleChange}
          autoComplete="off"
        />
        {error("confirmPassword") && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.confirmPassword}
            </span>
          </label>
        )}
      </div>
      <button className="btn w-full" type="submit" disabled={loading}>
        {loading ? <Spinner /> : "Register"}
      </button>
    </form>
  );
}

const FormikCreate = withFormik(
  RegisterForm,
  schemeValidations,
  initialValues,
  handleRegister
);

export default connect(null, { signUp })(FormikCreate);
