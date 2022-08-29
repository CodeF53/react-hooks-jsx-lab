import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>What the did you just say about me you little ? I'll have you know I graduated top of my class in the navy seals and have over 300 confirmed kills in gorilla warfare. You are nothing to me but another target. You're ing dead kiddo.</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
