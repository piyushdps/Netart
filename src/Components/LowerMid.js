import React from "react";
import LowerMidImage from "../Images/3.png";
export default function LowerMid() {
  return (
    <div className="LowerMid-container">
      <div className="part">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className="LowerMid-Image-container">
        <img alt="lowerMid" className="LowerMid-Image" src={LowerMidImage} />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr />
    </div>
  );
}
