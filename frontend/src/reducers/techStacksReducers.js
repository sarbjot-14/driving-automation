import {
    TECHSTACKS_LIST_FAIL,
    TECHSTACKS_LIST_REQUEST,
    TECHSTACKS_LIST_SUCCESS,
  } from "../constants/techStacksConstants";
  
  export const techStackListReducer = (state = { techStacks: [] }, action) => {
    switch (action.type) {
      case TECHSTACKS_LIST_REQUEST:
        return { loading: true };
      case TECHSTACKS_LIST_SUCCESS:
        return { loading: false, techStacks: action.payload };
      case TECHSTACKS_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  