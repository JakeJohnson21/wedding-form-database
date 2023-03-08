import React from "react";

function Registry() {
  return (
    <section className="main">
      <h2 className="page__title">Registry & Gifts</h2>
      <hr className="heading__divider"></hr>
      <p className="page__text">
        If you would like to honor us with a gift, you can have it delivered at
        our home at 812 West Eula Court – Glendale, Wisconsin 53209 or check out
        our wedding registry. There will also be a wedding card box at our
        reception.
      </p>
      <span className="registry__link_wrapper">
        <a
          href="https://www.crateandbarrel.com/gift-registry/farial-batul-and-kyle-bareither/r6657287"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="registry__link" id="crate"></div>
        </a>
        <a
          href="https://www.amazon.com/wedding/share/kyleandfarial2023"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="registry__link" id="amazon"></div>
        </a>

        <a
          href="https://www.westelm.com/registry/dbnfv8ldvk/registry-list.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="registry__link" id="west"></div>
        </a>
      </span>
    </section>
  );
}

export default Registry;
