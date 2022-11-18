import {ADD_SUMMARY} from "../types";

export const AddSummary = (payload) => {
  return {
    type: ADD_SUMMARY,
    payload: payload
  }
}
