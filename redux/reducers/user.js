import {UPDATE_DISPLAYNAME, UPDATE_USERDETAILS} from "../types";

const initialState = {
  firstName: '',
  lastName: '',
  displayName: '',
  otherDetails: {}
}

const updateUserData = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAYNAME:
      return {
        ...state,
        displayName: action.payload
      }
    case UPDATE_USERDETAILS:
      return {
        ...state,
        otherDetails: action.payload
      }
    default:
      return state;
  }
}

export default updateUserData;
