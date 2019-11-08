import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Fab, Box } from "@material-ui/core";
import { addSmurf } from "../../actions";

const AddSmurf = props => {
  const [addSmurf, setAddSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = event => {
    setAddSmurf({ ...addSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(addSmurf);
    console.log(addSmurf);
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        name="name"
        label="Smurf Name..."
        margin="normal"
        variant="outlined"
        onChange={handleChanges}
        required
      />
      <TextField
        name="age"
        label="Smurf Age..."
        margin="normal"
        variant="outlined"
        type="number"
        onChange={handleChanges}
        required
      />
      <TextField
        name="height"
        label="Smurf Height (cm)..."
        margin="normal"
        variant="outlined"
        onChange={handleChanges}
        required
      />
      <Fab
        type="submit"
        variant="extended"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Add Smurf
      </Fab>
    </Box>
  );
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
