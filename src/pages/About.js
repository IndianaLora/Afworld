import React from "react";
import { useForm } from "react-hook-form";
import AboutDescription from "../components/AboutDescription";
import ReactPlayer from "react-player";

function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="whiter">Values for entrepreneurship</h1>
        <AboutDescription />
        <br className="line" />
        <h1 className="whiter">Get to know more about resin</h1>
        <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=LkyLH3AaBpA"
        />
        <br className="line" />
      </div>
    </div>
  );
}

export default About;
