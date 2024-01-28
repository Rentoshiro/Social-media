import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import logo from "../../images/SamuraiLogo.jpeg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const handleLogout = (event) => {
    event.preventDefault();
    props.logout();
  };

  if (!props.photo) {
    return <div></div>;
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#F5F5FA" }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: 100, height: 100 }} />
        </Box>
        <div>
          {props.isAuth ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <div style={{ color: "black" }}>{props.login}</div>
                <div>
                  <img
                    src={
                      props.photo.photos.large
                        ? props.photo.photos.large
                        : "https://i.pinimg.com/originals/87/99/c2/8799c23bb7a1629ef923bfb52faf6d56.jpg "
                    }
                    alt="profile"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      margin: "8px",
                    }}
                  />
                </div>
                <Button variant="contained" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <NavLink to={"/login"} variant="contained">
              Login
            </NavLink>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
