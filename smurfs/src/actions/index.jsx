import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILUR";

// axios call to obtain data
export const fetchSmurfsData = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.message }));
};

export const addSmurf = smurf => dispatch => {
  axios.post("http://localhost:3333/smurfs", smurf);
};
