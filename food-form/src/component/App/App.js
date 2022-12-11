// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import "./App.css";
import { useState } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const [dataArray, setDataArray] = useState([]);

  return (
    <div className="page">
      <div className="app">
        <nav className="nav">
          <Link to="/food" className="nav__link">
            <button className="nav__button">Restaurant</button>
          </Link>
          <Link to="/stay" className="nav__link">
            <button className="nav__button">Hotel</button>
          </Link>
          <Link to="/play" className="nav__link">
            <button className="nav__button">Explore</button>
          </Link>
        </nav>
        <Routes>
          <Route
            path="/food"
            name="food"
            element={<FoodForm dataArray={dataArray} setData={setDataArray} />}
          />
          <Route
            path="/stay"
            name="stay"
            element={<StayForm dataArray={dataArray} setData={setDataArray} />}
          />
          <Route
            path="/play"
            name="play"
            element={<PlayForm dataArray={dataArray} setData={setDataArray} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <div className="post__content"></div>
      </div>
    </div>
  );
}

export default App;
