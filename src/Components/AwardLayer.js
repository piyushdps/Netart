import React from "react";
import AwardImage from "./../Images/1.png";
import BhasanImage from "./../Images/2.png";
export const AwardLayer = () => {
  return (
    <div className="AwardLayer-container">
      <div className="award-img-container">
        <img alt="award" className="award-img" src={AwardImage} />
      </div>
      <div className="award-bhasan-container">
        <strong>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </strong>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img
          alt="award-bhasan-container"
          className="award-bhasan-image-container"
          src={BhasanImage}
        />
        <p>
          Government of India has awarded the{" "}
          <strong style={{ fontSize: "inherit" }}>
            "National Energy Conservation Award 2018"
          </strong>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};
