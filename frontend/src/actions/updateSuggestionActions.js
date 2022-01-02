import {
  SUGGESTION_UPDATE_FAIL,
  SUGGESTION_UPDATE_REQUEST,
  SUGGESTION_UPDATE_SUCCESS,
} from "../constants/suggestionsConstants";
import axios from "axios";



export const updateSuggestionAction = (id, participant, model, lidar, camera, radar, level, compute, providingService, source) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SUGGESTION_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer jsdjfk`,
      },
    };
    const { data } = await axios.post(
      `/api/suggestions/update`,
      { id, participant, model, lidar, camera, radar, level, compute, providingService, suggestions:source, display:false },
      config
    );

    dispatch({
      type: SUGGESTION_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: SUGGESTION_UPDATE_FAIL,
      payload: message,
    });
  }
};

