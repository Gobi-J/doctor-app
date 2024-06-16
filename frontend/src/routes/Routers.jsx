import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import MyAccount from "../Dashboard/User/MyAccount";
import Dashboard from "../Dashboard/Doctor/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <PrivateRoute allowedRoles={["patient"]}>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <PrivateRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* <Route path="/*" element={<Home />} /> */}
    </Routes>
  );
};

export default Routers;
