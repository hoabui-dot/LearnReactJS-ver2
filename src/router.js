import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleBlog from "./pages/SingleBlog/SingleBlog";

const router = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/single-blog' element={<SingleBlog />} />
      </Routes>
    </Router>
  );
};

export default router;
