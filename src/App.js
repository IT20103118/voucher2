import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./components/User_Components/Registration";
import UserProfile from "./components/User_Components/UserProfile";
import Login from "./components/User_Components/Login";
import UserList from "./components/User_Components/UserList";
import Dashboard from "./components/layouts/Dashboard";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/user"  element={<Registration />} />
          <Route path="/user/profile"  element={<UserProfile />} />
          <Route path="/user/login"  element={<Login />} />
          <Route path="/user/all"  element={<UserList />} />
          <Route path="/dashboard"  element={<Dashboard />} />
        </Routes>
      </Router>
    );
  }
}
