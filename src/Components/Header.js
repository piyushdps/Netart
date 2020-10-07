import React from "react";
import HeaderImage from "../Images/logo.png";
export default function Header() {
  return (
    <div className="Header-Container">
      <div className="HeaderImage">
        <img className="Logo" alt="Logo" src={HeaderImage}></img>
      </div>
    </div>
  );
}
