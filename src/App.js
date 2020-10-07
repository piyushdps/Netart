import React from "react";
import Header from "./Components/Header";
import { AwardLayer } from "./Components/AwardLayer";
import LowerMid from "./Components/LowerMid";
import "./App.css";
import Footer from "./Components/Footer";
import AboveFooter from "./Components/AboveFooter";
function App() {
  return (
    <div className="App">
      <Header />
      <AwardLayer />
      <LowerMid />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
