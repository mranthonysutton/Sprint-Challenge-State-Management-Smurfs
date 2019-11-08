import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../../actions";
import { Fab, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Smurfs = props => {
  const deleteSmurf = id => {
    props.deleteSmurf(id);
  };

  return (
    <>
      <Card className="smurf-cards">
        <h2>{props.name}</h2>
        <p>{props.age} years old</p>
        <p>Height: {props.height}</p>
        <Fab color="secondary" aria-label="Delete">
          <DeleteIcon onClick={() => deleteSmurf(props.id)} />
        </Fab>
      </Card>
    </>
  );
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurfs);
