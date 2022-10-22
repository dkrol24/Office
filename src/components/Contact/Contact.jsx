import React, { useEffect, useState } from "react";
import "./Contact.css";
import TextareaField from "./TextareaField";
import InputField from "./InputField";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";
import { useScroll } from "../useScroll";
import Map from "./Map";
const Contact = () => {
  const [element, controls] = useScroll();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_lh3vq4v", "template_zb7xpfh", values, "smQiWYotfaIg-1_RE")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
            phone: "",
          });
          setStatus("Sukces");
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  useEffect(() => {
    if (status === "Sukces") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  //////////// SEND MESSAGES SECTION END////////////////

  return (
    <div ref={element} id="kontakt" className="contact section-p-top bg-black">
      <div className="container">
        <div className="contact-content  text-center">
          <motion.div
            transition={{ delay: 0, duration: 0.4, type: "tween" }}
            animate={controls}
            variants={milestonesAnimations}
            className="contact-left"
          >
            <div className="section-t">
              <h3 className="app__header-title2">Kontakt</h3>
              <p className="text">Skontaktuj się z nami!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <InputField
                value={values.fullName}
                handleChange={handleChange}
                name="fullName"
                type="text"
                placeholder="Imię i nazwisko"
                required
              />

              <InputField
                value={values.email}
                handleChange={handleChange}
                name="email"
                type="email"
                placeholder="Adres e-mail"
                required
              />

              <InputField
                value={values.phone}
                handleChange={handleChange}
                name="phone"
                type="phone"
                placeholder="Numer telefonu"
              />

              <TextareaField
                value={values.message}
                handleChange={handleChange}
                name="message"
                placeholder="Napisz wiadomość..."
                required
              />

              <div>
                <p className="form-warning">
                  <input
                    style={{ marginRight: "1rem" }}
                    id="checkbox"
                    type="checkbox"
                    name="boksik"
                    required
                  />
                  Wyrażam zgodę na przetwarzanie danych osobowych przez Biuro
                  Rachunkowe ABEMA z siedzibą w Warszawie, ul.Ksawerów 3, 02-656
                  Warszawa w celu przedstawienia oferty handlowej na adres
                  e-mail lub numer telefonu podany w formularzu kontaktowym
                  powyżej. Jednocześnie przyjmuję do wiadomości, że przysługuje
                  mi prawo dostępu do swoich danych, możliwość ich poprawiania
                  oraz żądania zaprzestania ich przetwarzania przez wysłanie
                  wiadomości e-mail na adres mszatanowska@gmail.com lub spod
                  adresu, którego zgoda dotyczy.{" "}
                </p>
                <div className="flex flex-start">
                  <button
                    type="submit"
                    disabled={handleSubmit}
                    className="submit-btn"
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Map />
    </div>
  );
};

export default Contact;
