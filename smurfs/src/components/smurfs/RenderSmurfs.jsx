import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfsData } from "../../actions";
import { Box } from "@material-ui/core";
import Smurfs from "./Smurfs";

const RenderSmurfs = props => {
  useEffect(() => {
    props.fetchSmurfsData();
    console.log("SMURF DATA: ", props.fetchSmurfsData);
  }, []);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignContent="center"
      justifyItems="center"
      textAlign="center"
      marginTop="3%"
    >
      {props.isFetching && (
        <div>
          <h2>Loading Smurfs...</h2>
        </div>
      )}

      {props.errors && <div>{props.errors}</div>}

      {props.smurfsData &&
        props.smurfsData.map(smurf => (
          <Smurfs
            key={smurf.id}
            id={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    smurfsData: state.smurfsData,
    isFetching: state.isFetching,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfsData }
)(RenderSmurfs);
