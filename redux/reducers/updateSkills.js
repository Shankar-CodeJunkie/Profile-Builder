import {ADD_SKILLS, REMOVE_SKILLS} from "../types";

const initialState = [];

const updateSkills = (state=initialState, action) => {
  switch (action.type) {
    case ADD_SKILLS:
      //let skills = action.payload.split(',');
     // console.log('heyski red', skills)
      return [
          ...state,
          ...action.payload
      ]
    case REMOVE_SKILLS:
      return state.filter(x => x.skillName != action.payload)
    default:
      return state
  }
}

export default updateSkills
