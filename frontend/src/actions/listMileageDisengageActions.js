import {
    MILEAGEDISENGAGE_LIST_FAIL,
    MILEAGEDISENGAGE_LIST_REQUEST,
    MILEAGEDISENGAGE_LIST_SUCCESS,
  } from "../constants/mileageDisengageConstants";
  import axios from "axios";
  
  export const listMileageDisengage = () => async (dispatch, getState) => {
    
    try {
      dispatch({
        type: MILEAGEDISENGAGE_LIST_REQUEST,
      });
      let mileage = []
      let disengage = []
      const mileData = await axios.get(`/api/mileageDisengage`);
      console.log("here")
      console.log(mileData)
      let mileageDisengage = mileData.data
      
      let compound = {}
      let compoundDisengage = {}
      for(let i = 0; i<mileageDisengage.length; i++){
        compound = {}
        compoundDisengage = {};
        compound.year = mileageDisengage[i].year
        compoundDisengage.year = mileageDisengage[i].year;
        //console.log(mileageDisengage[i].disengagements)
        for(let j = 0; j<mileageDisengage[i].mileage.length; j++){
       
            let spreading = mileageDisengage[i].mileage[j];
            let spreadingDisengage = mileageDisengage[i].disengagements[j];
            if(Object.values(spreading)[0] >350){
                compound[(Object.keys(spreading)[0])] = Object.values(spreading)[0]
                compoundDisengage[(Object.keys(spreadingDisengage)[0])] = Object.values(spreadingDisengage)[0]
            }
            
        }
        mileage.push(compound)
        disengage.push(compoundDisengage)
       



    }
    // console.log(mileage)
    // console.log(disengage)
      dispatch({
        type: MILEAGEDISENGAGE_LIST_SUCCESS,
        payload: mileage,
        payloadDisengage: disengage
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: MILEAGEDISENGAGE_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  