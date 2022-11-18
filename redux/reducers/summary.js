import {ADD_SUMMARY} from "../types";

const initialState = '';

const editSummary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUMMARY:
     return action.payload
    default:
      return state
  }
}

export default editSummary
