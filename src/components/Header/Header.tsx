import React from "react";
//@ts-ignore
import logo from "../../images/logoImg.jpg";
//@ts-ignore
import classes from "../../components/Header/Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  isAuth: boolean;
  login: string | null;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.logout();
  };

  return (
    <header className={classes.header}>
      <img src={logo} alt="Logo" />
      <div className={classes.headerContent}>
        <div className={`${classes.loginBlock} ${classes.rightAlign}`}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
        {props.isAuth ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </header>
  );
};

export default Header;
