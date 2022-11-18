import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import updateAwards from "./awards";
import updateExperience from "./experience";
import updateContact from "./contactDetails";
import updateSkills from "./updateSkills"
import editSummary from "./summary";
import updateUserData from './user'

export default combineReducers({
  sampleData: sampleReducer,
  awards: updateAwards,
  experiences: updateExperience,
  contact: updateContact,
  skills: updateSkills,
  summary: editSummary,
  userSocialDetails: updateUserData
});
