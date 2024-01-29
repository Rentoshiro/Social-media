import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/authReducer.ts";
import { Button } from "@mui/material";

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
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleValues("email", event.target.value)}
            style={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              padding: "8px",
              borderRadius: "10px",
              width: "auto",
            }}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => handleValues("password", event.target.value)}
            style={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              padding: "8px",
              borderRadius: "10px",
              width: "auto",
            }}
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
        {errorMessage && <div style={{ color: "#A81E1E" }}>{errorMessage}</div>}
        <div>{capthaUrl && <img src={capthaUrl} alt="Captcha" />}</div>
        <div>
          {capthaUrl && (
            <input
              id="captha"
              type="text"
              name="captha"
              onChange={(event) => handleValues("captha", event.target.value)}
              style={{
                backgroundColor: "rgba(169, 169, 169, 0.3)",
                padding: "8px",
                borderRadius: "10px",
                width: "auto",
              }}
            />
          )}
        </div>
        <div>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
