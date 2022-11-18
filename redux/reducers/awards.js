import {AWARDS_TITLE, ADD_AWARD} from "../types";

const initialState = [

]

const updateAwards = (state = initialState, action) => {
   switch (action.type) {
     case 'AWARDS_TITLE':
       return {
         ...state,
         awards: action.payload
       }
     case 'ADD_AWARD':
       return [
           ...state,
           ...action.payload
       ]
     case 'REMOVE_AWARD':
       let filteredArray = state.filter(x => x.awardName !== action.payload)
       return filteredArray
     default:
       return state
   }
}


export default updateAwards;
