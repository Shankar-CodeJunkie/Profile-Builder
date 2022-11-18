import {ADD_CONTACT, REMOVE_CONTACT} from "../types";

export const AddContact = (payload) =>  {
  return {
    type: ADD_CONTACT,
    payload: payload
  }
}

export const RemoveContact = (payload) =>  {
  return {
    type: REMOVE_CONTACT,
    payload: payload
  }
}
