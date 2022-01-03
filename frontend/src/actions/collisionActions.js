import {
  COLLISIONS_LIST_FAIL,
  COLLISIONS_LIST_REQUEST,
  COLLISIONS_LIST_SUCCESS,
} from "../constants/collisionsConstants";
import axios from "axios";

export const listCollisions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLISIONS_LIST_REQUEST,
    });

    let { data } = await axios.get(`/api/collisions`);

    // splice
    //data = data.slice(0,20)
    console.log(data);


    // sort
    let dataSorted = data.sort((a, b) => {
      let aa =
        parseInt(a.accidentDate.split("/")[0]) * 30 +
        parseInt(a.accidentDate.split("/")[1]) +
        parseInt(a.accidentDate.split("/")[2].slice(-2)) * 365;
      let bb =
        parseInt(b.accidentDate.split("/")[0]) * 30 +
        parseInt(b.accidentDate.split("/")[1]) +
        parseInt(b.accidentDate.split("/")[2].slice(-2)) * 365;
      return bb - aa;
    });
    console.log(dataSorted);

    dispatch({
      type: COLLISIONS_LIST_SUCCESS,
      payload: dataSorted,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COLLISIONS_LIST_FAIL,
      payload: message,
    });
  }
};

/*
  let sortedData = data.sort((a, b) => {
        //const d1 = new Date('2019-06-01');
        const ad = new Date(a.accidentDate.split('/')[2]+'-'+(a.accidentDate.split('/')[0]).length ===2?a.accidentDate.split('/')[0]: '0'+a.accidentDate.split('/')[0]+'-'+a.accidentDate.split('/')[1])
        const bd = new Date(b.accidentDate.split('/')[2]+'-'+(a.accidentDate.split('/')[0]).length ===2?b.accidentDate.split('/')[0]: '0'+b.accidentDate.split('/')[0] +'-'+b.accidentDate.split('/')[1])
        ad.setFullYear(parseInt(a.accidentDate.split('/')[2]));
        bd.setFullYear(parseInt(a.accidentDate.split('/')[2]));
        console.log(a.accidentDate)
        console.log(ad)
        console.log(a.accidentDate.split('/')[2]+'-'+a.accidentDate.split('/')[0]+'-'+a.accidentDate.split('/')[1])
        console.log("b")
        console.log(b.accidentDate)
        console.log(bd)
        console.log(b.accidentDate.split('/')[2]+'-'+b.accidentDate.split('/')[0]+'-'+b.accidentDate.split('/')[1])

        
        return bd -ad})
  */
