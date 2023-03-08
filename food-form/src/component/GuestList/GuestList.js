import { useEffect, useMemo, useState } from "react";
import exportFromJSON from "export-from-json";

import Guest from "./Guest";

function GuestList({ items }) {
  const data = items;
  const fileName = "download";
  const exportType = "xls";

  const ExportToExcel = () => {
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <section className="page guest__page">
      <h2 className="page__title">Guest List</h2>
      <button className="download__button" onClick={ExportToExcel}>
        <i className="download__icon"></i>
      </button>
      <div className="guest__wrapper">
        {items.map((item) => (
          <Guest
            key={item.data.id}
            name={item.data.name}
            attending={item.data.attending}
            entree={item.data.picked}
            notes={item.data.notes}
          />
        ))}
      </div>
    </section>
  );
}

export default GuestList;
