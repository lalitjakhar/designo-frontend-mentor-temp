import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
