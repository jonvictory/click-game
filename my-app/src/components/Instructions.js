import React from "react";

const Instructions = props => (
  <div className="instruction">
    <h1 className="no-marge title-center h1-size">Tarot</h1>
    <h3 className="tagline no-marge h3-size">
      <span>{props.tagline}</span>
    </h3>
  </div>
);

export default Instructions;
