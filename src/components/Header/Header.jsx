import React from "react";

import "./Header.css";

import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";
function Header() {
  const [element, controls] = useScroll();
  return (
    <header ref={element} className="app__header">
      <motion.div
        transition={{ delay: 0, duration: 0.6, type: "tween" }}
        animate={controls}
        variants={homeAnimation}
        className="app__header-content"
      >
        <div className="app__header-content-text">
          <h1 className="app__header-title">Abema</h1>
          <h1 className="app__header-title">biuro rachunkowe</h1>
          <p className="text-lead">
            Biuro rachunkowe ABEMA specjalizuje się w obsłudze ksiegowości
            spółek prawa handlowego oraz działalności gospodarczych.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="infoheader"
        variants={homeInfoAnimation}
        animate={controls}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="col">
          <strong>Email</strong>
          <p>abema.kontakt@gmail.com</p>
        </div>
        <div className="col">
          <strong>Telefon</strong>
          <p>+48 500 022 108</p>
          <p>+48 608 637 760</p>
        </div>
        <div className="col">
          <strong>Adres</strong>
          <p>ul. Ksawerów 3</p>
          <p>02-656 Warszawa</p>
        </div>
        <div className="col">
          <strong>Oferta</strong>
          <p>Wspólnoty mieszkaniowe</p>
          <p>Ryczałt ewidencjonowany</p>
          <p>Księgi przychodów i rozchodów</p>
          <p>Księgi handlowe</p>
          <p>Kadry i płace</p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
