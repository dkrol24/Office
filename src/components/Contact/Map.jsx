import React from "react";
import "./Contact.css";

const Map = () => {
  return (
    <div id="map" className="map-content">
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.099263160579!2d21.02124501576277!3d52.18706837975257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d243dbb4a9%3A0x2888eb972728945d!2sKsawer%C3%B3w%203%2C%2002-656%20Warszawa!5e0!3m2!1spl!2spl!4v1661282379826!5m2!1spl!2spl"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
