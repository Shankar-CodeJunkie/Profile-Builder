import {UPDATE_USERDETAILS} from "../types";

export const updateUserDetails = (payload) => {
  return {
    type: UPDATE_USERDETAILS,
    payload: payload
  }
}
