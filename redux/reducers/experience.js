import {ADD_EXPERIENCE, REMOVE_EXPERIENCE} from "../types";

const initialState = []

const updateExperience = (state=initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE: {
      return [
        ...state,
        ...action.payload
      ]
    }
    case REMOVE_EXPERIENCE: {
      let filteredArr = state.filter(x => x.designation !== action.payload)
      return filteredArr;
    }
    default:
      return state
  }
}

export default updateExperience
