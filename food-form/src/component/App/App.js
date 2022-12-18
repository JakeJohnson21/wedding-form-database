import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Explore from "../Explore/Explore";
import OurStory from "../OurStory/OurStory";
import Answers from "../Answers/Answers";
import Registry from "../Registry/Registry";
import Rsvp from "../RVSP/Rsvp";
import FormApp from "../FormApp/FormApp";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Footer from "../Footer/Footer";

function App() {
  const [page, setPage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const location = useLocation();

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);
  console.log(mobileMenuOpen);

  return (
    <main className="basepage">
      <Nav page={page} />
      <MobileMenu isOpen={mobileMenuOpen} />
      <div className="page__parent_wrapper">
        <h1 className="heading-title">Kyle</h1>
        <div className="page__content_wrapper">
          <section className="page__content">
            <Routes>
              <Route path="/" name="home" element={<Home page={page} />} />
              <Route
                path="/our-story"
                name="our-story"
                element={<OurStory />}
              />
              <Route path="/answers" name="answers" element={<Answers />} />
              <Route
                path="/explore"
                name="explore"
                element={<Explore eat={""} play={""} stay={""} />}
              />
              <Route path="/registry" name="registry" element={<Registry />} />
              <Route path="/rsvp" name="rsvp" element={<Rsvp />} />
              <Route path="/jakeisthebestform/*" element={<FormApp />} />
            </Routes>
            <h1 className="heading-date">July 14th 2023</h1>
          </section>
        </div>
        <h1 className="heading-title">Farial</h1>
      </div>
      {/* <Footer /> */}
      <button
        className="mobile__menu_button"
        onClick={handleMobileMenuOpen}
      ></button>
    </main>
  );
}

export default App;
