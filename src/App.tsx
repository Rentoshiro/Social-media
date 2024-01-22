import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import News from "./components/News/News.tsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.tsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.tsx";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import LoginContainer from "./components/Login/LoginContainer.tsx";
import { initializedApp } from "./redux/appReducer.ts";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppStateType } from "./redux/redux-store";

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

  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/" element={<Navigate to="/profile" replace />} />
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    initialized: state.initializedApp.initialized,
  };
};

export default compose(connect(mapStateToProps, { initializedApp }))(App);
