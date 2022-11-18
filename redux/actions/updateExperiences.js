import {ADD_EXPERIENCE, REMOVE_EXPERIENCE} from "../types";


export const AddExperience = (payload) => {
  return {
    type: ADD_EXPERIENCE,
    payload: payload
  }
}

export const RemoveExperience = (payload) => {
  return {
    type: REMOVE_EXPERIENCE,
    payload: payload
  }
}
