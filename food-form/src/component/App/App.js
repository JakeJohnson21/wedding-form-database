// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import Home from "../Home/Home";
import "./App.css";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="page">
      <div className="app">
        <nav className="nav">
          <Link to="/jakeisthebestform/food" className="nav__link">
            <button className="nav__button">Restaurant</button>
          </Link>
          <Link to="/jakeisthebestform/stay" className="nav__link">
            <button className="nav__button">Hotel</button>
          </Link>
          <Link to="/jakeisthebestform/play" className="nav__link">
            <button className="nav__button">Explore</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" name="home" element={<Home />} />

          <Route
            path="/jakeisthebestform/food"
            name="food"
            element={<FoodForm encode={encode} />}
          />
          <Route
            path="/jakeisthebestform/stay"
            name="stay"
            element={<StayForm encode={encode} />}
          />
          <Route
            path="/jakeisthebestform/play"
            name="play"
            element={<PlayForm encode={encode} />}
          />
        </Routes>

        <div className="post__content"></div>
      </div>
    </div>
  );
}

export default App;
