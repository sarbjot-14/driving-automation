import {
  SUGGESTION_UPDATE_FAIL,
  SUGGESTION_UPDATE_REQUEST,
  SUGGESTION_UPDATE_SUCCESS,
} from "../constants/suggestionsConstants";


export const suggestionUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUGGESTION_UPDATE_REQUEST:
      return { loading: true };
    case SUGGESTION_UPDATE_SUCCESS:
      return { loading: false, suggestion: action.payload, success: true };
    case SUGGESTION_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
