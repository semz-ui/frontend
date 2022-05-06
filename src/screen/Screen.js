import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";

function Screen() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/body' element={<Body />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Screen;
