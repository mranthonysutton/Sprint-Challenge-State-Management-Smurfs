import React from "react";
import RenderSmurfs from "../components/smurfs/RenderSmurfs";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <RenderSmurfs />
    </div>
  );
};

export default App;
