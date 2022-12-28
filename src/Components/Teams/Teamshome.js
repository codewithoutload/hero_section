import "./teams.css";
import { useState } from "react";
import Teambox from "./teambox";

import tpic1 from "./images/pic1.png";
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'

const Home = () => {
  const [boxes, setBoxes] = useState([
    {
      title: "CREATIVES",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 1,
    },
    {
      title: "EVENTS",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 2,
    },
  ]);

  return (
    <div className="home">
      <Nav />
      <div class="headingDiv">
        <h1 class="teamHeading">We made it happen</h1>
      </div>
      {boxes.map((box) => (
        <div className="teampage">
          <div class="teamContainer">
            <div class="teamInfo">
              <Teambox
                leftInsta={box.leftInsta}
                rightInsta={box.rightInsta}
                midInsta={box.midInsta}
                leftlink={box.leftlink}
                midlink={box.midlink}
                rightlink={box.rightlink}
                lefttwit={box.lefttwit}
                midtwit={box.midtwit}
                righttwit={box.righttwit}
              />
            </div>
          </div>
          <p class="teamName">{box.title}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
