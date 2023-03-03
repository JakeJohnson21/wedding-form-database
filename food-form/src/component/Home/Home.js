import RingPop from "../../images/ring-pop-1.jpg";
import desktopImg from "../../images/desktop-couple.jpg";
import mobileImg from "../../images/mobile-couple.jpg";

function Home() {
  return (
    <section className="page__content">
      <img
        className="home__image home__image-desktop"
        src={desktopImg}
        alt="desktop image of Kyle & Farial"
      ></img>
      <img
        className="home__image home__image-mobile"
        src={mobileImg}
        alt="desktop image of Kyle & Farial"
      ></img>
    </section>
  );
}
export default Home;
