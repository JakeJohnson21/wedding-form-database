import audubonImage from "../../images/bordered-color-lighterDropShadow-Schlitz.png";

function Home() {
  return (
    <section className="homepage">
      <div className="heading-title_wrap">
        <h1 className="heading-title">Kyle</h1>
        <div className="heading-sub-wrapper">
          <img className="heading-image" src={audubonImage} alt="audubon"></img>
          <h1 className="heading-date">07 14 2023</h1>
        </div>

        <h1 className="heading-title">Farial</h1>
      </div>
    </section>
  );
}
export default Home;
