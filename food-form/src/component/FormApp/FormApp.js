import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import AdventureForm from "../AdventureForm";

import { Routes, Route, Link } from "react-router-dom";

function FormApp() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <main className="page">
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
          <Route
            path="/food"
            name="food"
            element={<FoodForm encode={encode} />}
          />
          <Route
            path="/stay"
            name="stay"
            element={<StayForm encode={encode} />}
          />
          <Route
            path="/play"
            name="play"
            element={<AdventureForm encode={encode} />}
          />
        </Routes>

        <div className="post__content"></div>
      </div>
    </main>
  );
}

export default FormApp;
