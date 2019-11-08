import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfsData } from "../../actions";
import Smurfs from "./Smurfs";

const RenderSmurfs = props => {
  useEffect(() => {
    props.fetchSmurfsData();
    console.log("SMURF DATA: ", props.fetchSmurfsData);
  }, []);

  return (
    <div>
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
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
    </div>
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
