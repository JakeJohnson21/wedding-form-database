import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Explore from "../Explore/Explore";
import Answers from "../Answers/Answers";
import Registry from "../Registry/Registry";
import Rsvp from "../RVSP/Rsvp";
import FormApp from "../FormApp/FormApp";
import GuestList from "../GuestList/GuestList";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Footer from "../Footer/Footer";

function App() {
  const [page, setPage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [restaurantList, setRestaurantList] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [adventureList, setAdventureList] = useState([]);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  //-----------------------------------------------------------------------------

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("July 14, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  // useMemo(() => {
  //   startTimer();
  // }, []);

  //-----------------------------------------------------------------------------

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  //-----------------------------------------------------------------------------

  function handleRestaurantList() {
    const populateData = async () => {
      const get = await fetch(
        `https://api.netlify.com/api/v1/forms/638ff9b427bdc9000845d676/submissions`,
        {
          headers: {
            Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await get.json();
      setRestaurantList(response);
    };
    populateData();
  }
  //-----------------------------------------------------------------------------
  function handleHotelList() {
    const populateData = async () => {
      const get = await fetch(
        `https://api.netlify.com/api/v1/forms/639110e975aa5200085738f1/submissions`,
        {
          headers: {
            Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await get.json();
      setHotelList(response);
    };
    populateData();
  }
  //-----------------------------------------------------------------------------
  function handleAdventureList() {
    const populateData = async () => {
      const get = await fetch(
        `https://api.netlify.com/api/v1/forms/639110ea75aa5200085738f2/submissions`,
        {
          headers: {
            Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await get.json();
      setAdventureList(response);
    };
    populateData();
  }
  //-----------------------------------------------------------------------------

  useEffect(() => {
    handleRestaurantList();
    handleHotelList();
    handleAdventureList();
  }, []);

  //-----------------------------------------------------------------------------

  function handleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  function handleCloseMobileMenu() {
    setMobileMenuOpen(false);
  }

  const location = useLocation();

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);
  //-----------------------------------------------------------------------------

  const titleClassName = `title ${
    page === "/" ? "homepage__title" : "other__title"
  }`;
  const dateClassName = `date ${
    page === "/" ? "homepage__date" : "other__date"
  }`;
  const pageHeadingClassName = `page__heading ${
    page === "/" ? "homepage__heading" : "other__heading"
  }`;

  return (
    <main className="basepage">
      <div className={pageHeadingClassName}>
        <h1 className={titleClassName}>Kyle & Farial</h1>

        <h1 className={dateClassName}>July 14, 2023</h1>
      </div>

      <Nav page={page} />

      <div className="page__parent_wrapper">
        {/* <h1 className="heading-title">Kyle</h1> */}
        <section className="page__content">
          <Routes>
            <Route path="/" name="home" element={<Home page={page} />} />
            <Route path="/answers" name="answers" element={<Answers />} />
            <Route
              path="/explore/*"
              name="explore"
              element={
                <Explore
                  eat={restaurantList}
                  stay={hotelList}
                  play={adventureList}
                  page={page}
                />
              }
            />
            <Route path="/registry" name="registry" element={<Registry />} />
            <Route
              path="/rsvp"
              name="rsvp"
              element={<Rsvp encode={encode} />}
            />
            <Route
              path="/jakeisthebestform/*"
              element={<FormApp encode={encode} />}
            />
            <Route
              path="/guests5859142023"
              name="guestlist"
              element={<GuestList />}
            />
          </Routes>
        </section>

        {/* <h1 className="heading-title">Farial</h1> */}
      </div>
      <Footer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={handleCloseMobileMenu} />

      <button
        className="mobile__menu_button"
        onClick={handleMobileMenuOpen}
      ></button>
    </main>
  );
}

export default App;
