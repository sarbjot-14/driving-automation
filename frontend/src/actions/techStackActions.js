import {
    TECHSTACKS_LIST_FAIL,
    TECHSTACKS_LIST_REQUEST,
    TECHSTACKS_LIST_SUCCESS,
  } from "../constants/techStacksConstants";
  import axios from "axios";
  
  export const listTechStacks = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TECHSTACKS_LIST_REQUEST,
      });
  
  
  
      const { data } = await axios.get(`/api/techStacks`);
      //console.log("tech stacks is "+ data)
      dispatch({
        type: TECHSTACKS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: TECHSTACKS_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  