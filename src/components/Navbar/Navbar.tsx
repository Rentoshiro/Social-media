import React, { useState, useEffect } from "react";
//@ts-ignore
import classes from "../../components/Navbar/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
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

  return (
    <nav
      style={{
        height: "auto",
      }}
      className={classes.sidebar}
    >
      <div>
        <NavLink
          to="/profile"
          className={selectedItem === 0 ? classes.selectedItem : undefined}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={selectedItem === 1 ? classes.selectedItem : undefined}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={selectedItem === 4 ? classes.selectedItem : undefined}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={selectedItem === 2 ? classes.selectedItem : undefined}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={selectedItem === 3 ? classes.selectedItem : undefined}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={selectedItem === 5 ? classes.selectedItem : undefined}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
