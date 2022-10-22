import React from "react";
import "./Features.css";
import sections from "../../constants/data";
import SingleFeatures from "./SingleFeatures";
import { useScroll } from "../useScroll";
const Features = () => {
  const [element] = useScroll();
  return (
    <section ref={element} id="oferta" className="features ">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="section-t">
            <h3 className="app__header-title2">Świadczymy usługi w zakresie</h3>
          </div>
          <div className="item-list2 text-white">
            {sections.features.map((feature) => {
              return <SingleFeatures key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
