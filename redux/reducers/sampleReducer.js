import { GET_SAMPLE, SAMPLE_ERROR, UPDATE_USERNAME } from "../types";

const initialState = {
  sample: [],
  userName: '',
  loading: true,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAMPLE:
      return {
        ...state,
        sample: action.payload,
        loading: false,
      };
    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state;
  }
};

export default sampleReducer;
