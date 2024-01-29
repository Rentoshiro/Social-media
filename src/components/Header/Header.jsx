import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import logo from "../../images/SamuraiLogo.jpeg";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.jpeg";

const Header = (props) => {
  const handleLogout = (event) => {
    event.preventDefault();
    props.logout();
  };

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
                      props.photo && props.photo.photos.large
                        ? props.photo.photos.large
                        : icon
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
              <Button variant="text">Login</Button>
            </NavLink>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
