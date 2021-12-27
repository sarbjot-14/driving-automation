import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  techStackListReducer,

} from "./reducers/techStacksReducers";

import {
  mileageDisengageListReducer,

} from "./reducers/mileageDisengagementReducers";


const reducer = combineReducers({
  techStackList: techStackListReducer,
  mileageDisengageList: mileageDisengageListReducer

});


const initialState = {
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
