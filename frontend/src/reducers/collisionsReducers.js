import {
    COLLISIONS_LIST_FAIL,
    COLLISIONS_LIST_REQUEST,
    COLLISIONS_LIST_SUCCESS,
  } from "../constants/collisionsConstants";
  
  export const collisionListReducer = (state = { collisions: [] }, action) => {
    switch (action.type) {
      case COLLISIONS_LIST_REQUEST:
        return { loading: true };
      case COLLISIONS_LIST_SUCCESS:
        return { loading: false, collisions: action.payload };
      case COLLISIONS_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  