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
      <div data-ns-test="project-name">
        Description:
        <Description />
      </div>
    </>
  );
};

export default App;
