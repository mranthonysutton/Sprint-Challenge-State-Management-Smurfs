import React from "react";
import RenderSmurfs from "../components/smurfs/RenderSmurfs";
import AddSmurf from "../components/smurfs/AddSmurf";
import { Container } from "@material-ui/core";
import "./App.css";

const App = props => {
  return (
    <Container maxWidth="md">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <AddSmurf />
      <RenderSmurfs />
    </Container>
  );
};

export default App;
