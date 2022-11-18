import { GET_SAMPLE, SAMPLE_ERROR , AWARDS_TITLE  } from "../types";

/*export const getSampleData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAMPLE,
      payload: [1, 2, 3, 4, 5, 6],
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};*/

export const getSampleData = (payload) => {
  return {
    type: GET_SAMPLE,
    payload: payload
  }
}

export const updateUserName = (payload) => {
  return {
    type:AWARDS_TITLE,
    payload: payload
  }
}
