import React from "react";
import * as Yup from "yup";

import { connect } from "react-redux";
import { signIn } from "../../redux/actions";
import withFormik from "../../utils/withFormik";
import { baseUrl } from "../../utils";

const initialValues = {
  username: "",
  password: "",
};

const schemeValidations = Yup.object().shape({
  username: Yup.string().required("Please enter your username or email"),
  password: Yup.string().required("Please enter your password"),
});

const handleLogin = async (payload, ctx) => {
  const { username, password } = payload;

  ctx.props.signIn({
    username,
    password,
  });
};

function LoginForm(props) {
  const { values, touched, errors, handleChange, handleSubmit } = props;

  const error = (val) => Boolean(touched[val] && errors[val]);

  return (
    <form className="py-4 w-full" onSubmit={handleSubmit}>
      <div className="py-1">
        <input
          type="text"
          name="username"
          placeholder="Username Or Email"
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
      <button className="btn w-full" type="submit">
        Login
      </button>
    </form>
  );
}

const FormikCreate = withFormik(
  LoginForm,
  schemeValidations,
  initialValues,
  handleLogin
);

export default connect(null, { signIn })(FormikCreate);
