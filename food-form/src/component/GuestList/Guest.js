function Guest({ name, attending, entree, notes }) {
  return (
    <div className="guest__item">
      <label className="guest__label">
        Name:
        <p className="guest__text">{name}</p>
      </label>
      <label className="guest__label">
        Attending:
        <p className="guest__text">{attending}</p>
      </label>
      <label className="guest__label">
        Entree:
        <p className="guest__text">{entree}</p>
      </label>
      <label className="guest__label">
        Notes:
        <p className="guest__text">{notes}</p>
      </label>
    </div>
  );
}

export default Guest;
