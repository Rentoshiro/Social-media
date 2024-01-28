import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/authReducer.ts";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
    captha: "",
  });
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const capthaUrl = useSelector((state) => state.auth.capthaUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login(
        formValues.email,
        formValues.password,
        formValues.rememberMe,
        formValues.captha
      )
    );
  };

  const handleValues = (identifier, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleValues("email", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => handleValues("password", event.target.value)}
          />
        </div>
        <div>
          <input
            id="rememberMe"
            type="checkbox"
            name="rememberMe"
            onChange={(event) =>
              handleValues("rememberMe", event.target.checked)
            }
            checked={formValues.rememberMe}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <div>{capthaUrl && <img src={capthaUrl} alt="Captcha" />}</div>
        <div>
          {capthaUrl && (
            <input
              id="captha"
              type="text"
              name="captha"
              onChange={(event) => handleValues("captha", event.target.value)}
            />
          )}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
