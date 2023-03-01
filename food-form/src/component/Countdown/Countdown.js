function Countdown({ days, hours, minutes, seconds }) {
  return (
    <div className="countdown__wrapper">
      <span className="countdown__item">
        <p className="countdown__data">{`${days}`}</p>
        <p className="countdown__label">Days</p>
      </span>
      <p className="countdown__colon">:</p>
      <span className="countdown__item">
        <p className="countdown__data">{`${hours}`}</p>
        <p className="countdown__label">Hours</p>
      </span>
      <p className="countdown__colon">:</p>
      <span className="countdown__item">
        <p className="countdown__data">{`${minutes}`}</p>
        <p className="countdown__label">Minutes</p>
      </span>
      <p className="countdown__colon">:</p>
      <span className="countdown__item">
        <p className="countdown__data">{`${seconds}`}</p>
        <p className="countdown__label">Seconds</p>
      </span>
    </div>
  );
}

export default Countdown;
