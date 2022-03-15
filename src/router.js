import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default router;
