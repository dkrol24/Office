import React from "react";
import "./About.css";
import image from "../../assets/images/video_cover_img.jpg";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import { portfolioAnimations, homeInfoAnimation } from "../animation";
const About = () => {
  const [element, controls] = useScroll();
  return (
    <section ref={element} id="o nas" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            transition={{ delay: 0, duration: 0.6, type: "tween" }}
            animate={controls}
            variants={portfolioAnimations}
            className="content-left"
          >
            <img src={image} alt="image" />
          </motion.div>
          <motion.div
            transition={{ delay: 0, duration: 0.6, type: "tween" }}
            animate={controls}
            variants={homeInfoAnimation}
            className="content-right"
          >
            <div className="section-t" style={{ textAlign: "center" }}>
              <h3 className="app__header-title2">O nas</h3>
            </div>
            <p className="text">
              Jesteśmy nowoczesnym biurem rachunkowym w Radomiu. Świadczymy
              kompleksową obsługę dla wszystkich przedsiębiorców, których
              księgowość oparta jest na podatkowej księdze przychodów i
              rozchodów oraz dla firm prowadzących księgi rachunkowe .
              Obsługujemy zarówno firmy osób fizycznych jak i spółki prawa
              handlowego. Zapewniamy naszym klientom reprezentację przed
              urzędami.
            </p>
            <p className="text">
              Oferujemy pomoc w załatwianiu wszelkich formalności związanych z
              założeniem własnej działalności, jak również pomagamy przy
              rejestracji spółek prawa handlowego. Gwarantujemy oszczędność
              Państwa cennego czasu i pewność terminowej realizacji zleceń. Do
              każdego klienta podchodzimy indywidualnie tak aby współpraca
              dawała jak najlepsze efekty.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
