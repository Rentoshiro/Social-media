import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import News from "./components/News/News.tsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.tsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.tsx";
import UsersContainer from "./components/Users/UsersAPIComponent.tsx";
import ProfileContainer from "./components/Profile/Profile.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import LoginContainer from "./components/Login/LoginContainer.tsx";
import { initializedApp } from "./redux/appReducer.ts";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppStateType } from "./redux/redux-store";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

type MapStateToPropsType = {
  initialized: boolean;
};

type MapDispatchToPropsType = {
  initializedApp: (isInitialized: boolean) => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const App: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.initializedApp(true);
  }, []);

  if (!props.initialized) {
    return <div>Loading...</div>;
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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

// <BrowserRouter>
//   <div className="app-wrapper">
//    <HeaderContainer />
//     <Navbar />
//     <div className="app-wrapper-content">
//       <Routes>
//         <Route path="/" element={<Navigate to="/profile" replace />} />
//         <Route path="/profile/:userId?" element={<ProfileContainer />} />
//         <Route path="/dialogs/*" element={<DialogsContainer />} />
//         <Route path="/users" element={<UsersContainer />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/music" element={<Music />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/login" element={<LoginContainer />} />
//       </Routes>
//     </div>
//   </div>
// </BrowserRouter>
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    initialized: state.initializedApp.initialized,
  };
};

export default compose(connect(mapStateToProps, { initializedApp }))(App);
