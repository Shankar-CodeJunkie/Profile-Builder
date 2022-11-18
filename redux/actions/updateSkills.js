import {ADD_SKILLS, REMOVE_SKILLS} from "../types";

export const AddSkills = (payload) => {
  return {
    type: ADD_SKILLS,
    payload: payload
  }
}

export const RemoveSkills = (payload) => {
  return {
    type: REMOVE_SKILLS,
    payload: payload
  }
}
