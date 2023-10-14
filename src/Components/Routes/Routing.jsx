import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import Location from "../location/Location";
import Company from "../company/Company";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
