import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer bg-black flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className="grid footer-content text-center">
          <p style={{ fontSize: "10px", color: "#fff" }}>
            Website made by ~Dawid Król
          </p>
          <span style={{ fontSize: "10px", color: "#fff" }}>
            &copy; {date.getFullYear().toString()} Abema biuro rachunkowe.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
