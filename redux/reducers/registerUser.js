import {REGISTER_USER} from "../types";

const initialState = [

]

const registerUser = (state=initialState, action) => {
  switch (action.type) {
    case  REGISTER_USER:
      return {
        ...initialState,
        users: action.payload
      }
    default:
      return state;
  }
}

export default registerUser;
