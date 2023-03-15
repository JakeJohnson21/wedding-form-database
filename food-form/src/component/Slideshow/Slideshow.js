import { Slide } from "react-slideshow-image";
import { slideImages } from "./ImageArray";

import leftArrow from "../../images/leftArrow-white.svg";
import rightArrow from "../../images/rightArrow-white.svg";

export const ImageSlideshow = ({ isOpen }) => {
  const buttonStyle = {
    width: "50px",
    background: "none",
    border: "none",
  };

  const arrowsClassName = `${isOpen ? "arrows-hidden" : "arrow"}`;

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <img
          id="leftArrow"
          className={arrowsClassName}
          src={leftArrow}
          alt={"previous arrow button"}
        />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <img
          id="rightArrow"
          className={arrowsClassName}
          src={rightArrow}
          alt={"next arrow button"}
        />
      </button>
    ),
    canSwipe: true,
  };

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((item) => (
          <div className="each-slide-effect" key={item.id}>
            <div className="home__image">
              <img
                src={item.image}
                className="slideshow__image"
                alt={item.text}
              />
              <span className="slideshow__label">{item.text}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
