import React, { Component, useState } from "react";
import "../styles/App.css";
import Description from "./description";
import Name from "./name";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">
        Name:
        <Name />
      </h1>
      <div data-ns-test="project-description">
        Description: this is the so called description of my project.
        <Description />
      </div>
    </>
  );
};

export default App;
