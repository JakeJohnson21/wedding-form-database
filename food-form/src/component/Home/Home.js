import desktopImg from "../../images/desktop-couple.jpg";
import mobileImg from "../../images/mobile-couple.jpg";
import { ImageSlideshow } from "../Slideshow/Slideshow";

function Home() {
  const images = [
    desktopImg,
    "src/images/Slideshow/IMG-20220602-WA0002.jpg",
    "src/images/Slideshow/IMG-20220603-WA0001.jpg",
    "src/images/Slideshow/IMG-20220603-WA0003.jpg",
  ];

  return (
    <section className="react-slideshow-container">
      <ImageSlideshow />
    </section>
  );
}
export default Home;
