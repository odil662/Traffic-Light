import React, { useState } from "react";
import "./TrafficLight.css";

const lap = ["red", "yellow", "green"];
let lastLap;
const TrafficLight = () => {
  const [activeLap, setActiveLap] = useState(2);

  const buttonClickHandler = () => {
    if (activeLap !== 1) {
      lastLap = activeLap;
      setActiveLap(1);
    } else lastLap === 0 ? setActiveLap(2) : setActiveLap(0);
  };

  return (
    <div className="page">
      <div className="trafficLight">
        {lap.map((el, i) => (
          <div key={i} className={`lap ${i === activeLap && el}`}></div>
        ))}
      </div>
      <button className="button" onClick={() => buttonClickHandler()}>
        Следующий цвет
      </button>
    </div>
  );
};

export default TrafficLight;
