import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";
import { useScroll } from "../useScroll";
const SingleService = ({ service }) => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      transition={{ delay: 0, duration: 0.4, type: "tween" }}
      animate={controls}
      variants={milestonesAnimations}
      className="item"
    >
      <span className="item-icon">{service.icon}</span>
      <h4 style={{ fontWeight: "400" }}>{service.title}</h4>
    </motion.div>
  );
};

export default SingleService;
