import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const Routers = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default Routers;
