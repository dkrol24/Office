import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import "./Features.css";
import { motion } from "framer-motion";
import { milestonesAnimations } from "../animation";
import { useScroll } from "../useScroll";
const gradient = "url(#blue-gradient)";

const SingleFeatures = (feature) => {
  const [isActive, setIsActive] = useState(false);
  const [element, controls] = useScroll();
  return (
    <div className="item2" key={feature.id}>
      <motion.div
        ref={element}
        transition={{ delay: 0, duration: 0.4, type: "tween" }}
        animate={controls}
        variants={milestonesAnimations}
        className={`item-head flex flex-between ${
          isActive ? "item-head-border" : null
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <h6 style={{ fontSize: "20px", fontWeight: "400" }}>{feature.title}</h6>
        <button
          type="button"
          className={`item-icon ${isActive ? "item-icon-rotate" : ""}`}
        >
          <BsPlusLg style={{ fill: gradient }} size={22} />
        </button>
      </motion.div>

      <div className={`item-body ${isActive ? "item-body-show" : ""}`}>
        <p className="text2">{feature.text}</p>
        <p className="text2">{feature.text2}</p>
        <p className="text2">{feature.text3}</p>
        <p className="text2">{feature.text4}</p>
        <p className="text2">{feature.text5}</p>
        <p className="text2">{feature.text6}</p>
        <p className="text2">{feature.text7}</p>
      </div>
    </div>
  );
};

export default SingleFeatures;
