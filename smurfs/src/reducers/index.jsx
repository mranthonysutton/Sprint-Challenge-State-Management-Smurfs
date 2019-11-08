import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = { smurfsData: [], isFetching: false, errors: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, smurfsData: [], isFetching: true, errors: null };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfsData: action.payload,
        isFetching: false,
        errors: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        smurfsData: [],
        isFetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
