import React from "react";
import "./Services.css";
import sections from "../../constants/data";
import SingleService from "./SingleService";
import { useScroll } from "../useScroll";
const Services = () => {
  const [element] = useScroll();
  return (
    <section ref={element} id="start" className="services">
      <div className="container">
        <svg width="1em" height="1em">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#ac5fcf" offset="0%" />
            <stop stopColor="#673b7d" offset="100%" />
          </linearGradient>
        </svg>
        <div className="item-list">
          {sections.services.map((service) => {
            return <SingleService service={service} key={service.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
