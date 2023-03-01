import Countdown from "../Countdown/Countdown";

function Footer({ days, hours, minutes, seconds }) {
  return (
    <footer className="footer">
      <Countdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </footer>
  );
}
export default Footer;
