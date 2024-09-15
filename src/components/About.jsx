import React from "react";
import "../assets/About.css";
import personalData from "../data/ecb";

const About = () => {
  return (
    <div className="about">
      <div className="header">{"<about classname='me'>"}</div>
      <div className="info">{personalData.about}</div>
      <div className="header">{"</about>"}</div>
    </div>
  );
};

export default About;
