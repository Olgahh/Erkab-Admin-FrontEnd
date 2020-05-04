import {
  GET_SCHOOL,
  SET_BUSSES,
  SET_CHILDREN,
  ADD_SCHOOL,
} from "../actions/actionTypes";

const initialState = {
  schools: [],
  busses: [],
  children: [],
};

const erkabReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL:
      return {
        ...state,
        schools: action.payload,
      };
    case SET_BUSSES:
      return {
        ...state,
        busses: action.payload,
      };
    case SET_CHILDREN:
      return {
        ...state,
        children: action.payload,
      };
    case ADD_SCHOOL:
      return {
        ...state,
        schools: [action.payload, ...state.schools],
      };
    default:
      return state;
  }
};

export default erkabReducer;
