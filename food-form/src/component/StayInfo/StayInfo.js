import React from "react";

function StayInfo() {
  return (
    <section className="sub-main">
      <h2 className="page__title">Where to stay</h2>
      <p className="paragraph">
        We have only a few hotel rooms in Grafton (5-10 minutes from the venue)
        and a few friends in the area that are willing to host guests. If you
        need help with lodging, please reach out directly to us.
      </p>
      <p className="paragraph">
        Traditional hotel rooms are quite expensive the weekend of the
        celebration because there is the 120th Anniversary for Harley Davison
        going on. If you are interested in staying at a local hotel, you can use
        this link that is already set up for the event.
      </p>
      <a
        href="https://www.visitmilwaukee.org/harley-davidson-homecoming-2023/?xd_co_f=ZDAxMDVhNDUtYjlkMi00OWFmLTk5YTYtNzgwMmE1NGFhNzI1"
        className="stay__link"
        target="_blank"
        rel="noreferrer noopener"
      >
        Visit Site
      </a>
    </section>
  );
}

export default StayInfo;
