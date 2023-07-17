import * as actionType from "../Action/type.js";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionType.ADDNEW_TODO:
      return [action.payload, ...state];

    default:
      return state;
  }
};
