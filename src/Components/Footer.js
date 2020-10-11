import React from "react";

import web from "../Images/web.svg";
import phone from "../Images/phone.svg";
export default function Footer() {
  return (
    <div className="footer-container">
      <a href="tel:18002001234">
        {" "}
        <div className="foot">
          <img className="svg" alt="phone" src={phone}></img>
          <p>
            TOLLFREE{""}
            <strong style={{ fontSize: "inherit" }}> 1800 200 1234</strong>
          </p>
        </div>
      </a>
      <a href="https://www.facebook.com/cripumps">
        <div className="foot">
          <svg
            fill="#FFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
          </svg>
          <p>www.facebook.com/cripumps</p>
        </div>
      </a>
      <a href="https://www.cripumps.com/">
        <div className="foot">
          <img className="svg" alt="phone" src={web}></img>
          <p>www.cripumps.com</p>
        </div>
      </a>
    </div>
  );
}
