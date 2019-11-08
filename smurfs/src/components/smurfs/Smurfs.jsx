import React from "react";

const Smurfs = props => {
  return (
    <div className="smurf-card">
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.height}</p>
    </div>
  );
};

export default Smurfs;
