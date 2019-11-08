import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfsData } from "../../actions";

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
