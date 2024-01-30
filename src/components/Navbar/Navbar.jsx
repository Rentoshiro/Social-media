import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Box } from "@mui/material";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("/profile")) {
      setSelectedItem(0);
    } else if (pathname.includes("/dialogs")) {
      setSelectedItem(1);
    } else if (pathname.includes("/users")) {
      setSelectedItem(4);
    } else if (pathname.includes("/news")) {
      setSelectedItem(2);
    } else if (pathname.includes("/music")) {
      setSelectedItem(3);
    } else if (pathname.includes("/settings")) {
      setSelectedItem(5);
    }
  }, [location.pathname]);

  const getButtonStyle = (index) => {
    return {
      width: "100%",
      color: "#87A5AB",
      backgroundColor: selectedItem === index ? "#5B52DE" : "#161436",
      marginBottom: "5px",
    };
  };

  return (
    <nav
      style={{
        height: "100vh",
        backgroundColor: "#161436",
        overflowY: "auto",
      }}
    >
      <Box>
        <Button
          component={NavLink}
          to="/profile"
          sx={getButtonStyle(0)}
          variant="contained"
        >
          Profile
        </Button>
      </Box>
      <Box>
        <Button
          component={NavLink}
          to="/dialogs"
          sx={getButtonStyle(1)}
          variant="contained"
        >
          Chat
        </Button>
      </Box>
      <Box>
        <Button
          component={NavLink}
          to="/users"
          sx={getButtonStyle(4)}
          variant="contained"
        >
          Users
        </Button>
      </Box>
      {/* <Box>
        <Button
          component={NavLink}
          to="/news"
          sx={getButtonStyle(2)}
          variant="contained"
        >
          News
        </Button>
      </Box> */}
      {/* <Box>
        <Button
          component={NavLink}
          to="/music"
          sx={getButtonStyle(3)}
          variant="contained"
        >
          Music
        </Button>
      </Box>
      <Box>
        <Button
          component={NavLink}
          to="/settings"
          sx={getButtonStyle(5)}
          variant="contained"
        >
          Settings
        </Button>
      </Box> */}
    </nav>
  );
}

export default Navbar;
