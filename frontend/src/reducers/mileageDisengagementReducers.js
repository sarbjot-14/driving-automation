import { bindActionCreators } from "redux";
import {
    MILEAGEDISENGAGE_LIST_FAIL,
    MILEAGEDISENGAGE_LIST_REQUEST,
    MILEAGEDISENGAGE_LIST_SUCCESS,
  } from "../constants/mileageDisengageConstants";
  
  export const mileageDisengageListReducer = (state = { mileageDisengage: [] }, action) => {
    switch (action.type) {
      case MILEAGEDISENGAGE_LIST_REQUEST:
        return { loading: true };
      case MILEAGEDISENGAGE_LIST_SUCCESS:
        return { loading: false, mileageDisengage: action.payload, disengagement: action.payloadDisengage};
      case MILEAGEDISENGAGE_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  