import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersAPIComponent";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login.jsx";
import { initializedApp } from "./redux/appReducer.ts";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { withAuthRedirect } from "./hoc/AuthRedirect.jsx";

import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const App = (props) => {
  useEffect(() => {
    props.initializedApp(true);
  }, []);

  if (!props.initialized) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  const Item = styled(Paper)(({}) => ({}));

  return (
    <>
      <BrowserRouter>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <HeaderContainer />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Navbar />
              </Item>
            </Grid>
            <Grid item xs={9}>
              <Item>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/profile" replace />}
                  />
                  <Route
                    path="/profile/:userId?"
                    element={<ProfileContainer />}
                  />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/login" element={<LoginContainer />} />
                </Routes>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.initializedApp.initialized,
  };
};

export default compose(connect(mapStateToProps, { initializedApp }))(App);
