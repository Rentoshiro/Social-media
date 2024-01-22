import React, { useState, FormEvent } from "react";

type LoginFormProps = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captha: string
  ) => void;
  errorMessage: string | null;
  capthaUrl: string | null;
};

const LoginForm: React.FC<LoginFormProps> = ({
  login,
  errorMessage,
  capthaUrl,
}) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
    captha: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(
      formValues.email,
      formValues.password,
      formValues.rememberMe,
      formValues.captha
    );
  };

  const handleValues = (identifier: string, value: string | boolean) => {
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
