import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hello, my name is Desiree and I am 29 years old.</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
