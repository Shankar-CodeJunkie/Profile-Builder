import {AWARDS_TITLE, ADD_AWARD, REMOVE_AWARD} from "../types";

export const AddAward = (payload) => {
  return {
    type:ADD_AWARD,
    payload: payload
  }
}

export const RemoveAward = (payload) => {
  return {
    type: REMOVE_AWARD,
    payload: payload
  }
}

export const changeAwardTitle = (payload) => {
  return {
    type:AWARDS_TITLE,
    payload: payload
  }
}
