import { combineReducers } from "redux";
import { mbtiReducer } from "./modules/mbti";

const rootReducer = combineReducers({
  mbti: mbtiReducer,
});

export default rootReducer;
