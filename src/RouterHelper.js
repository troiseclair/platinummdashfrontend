import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import AddUser from "./components/User/AddUser";
import DeleteUser from "./components/User/DeleteUser";
import UpdateUser from "./components/User/UpdateUser";
import { LayoutContext } from "./context/LayoutContext";

export default function RouterHelper() {
  let [user, setUser] = useState(null);
  let { isLoggedIn } = useContext(LayoutContext);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser(null);
    }
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} 
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/User"
          element={
            user ? <User user={user} /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/User/adduser" element={<AddUser />} />
        <Route
          path="/User/update/:id"
          element={
            user ? (
              <UpdateUser user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/User/delete/:id" element={<DeleteUser />} />
        {/* user route */}
        <Route
          path="/user"
          element={
            user ? <User user={user} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}
