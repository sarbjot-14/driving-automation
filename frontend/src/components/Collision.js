import React, { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {  listCollisions } from "../actions//collisionActions";
import "./Screen.css";
import Loading from "../components/Loading";

const Collision = () => {
    const dispatch = useDispatch();

    const collisionList = useSelector((state) => state.collisionList);
    const { loading,  collisions } = collisionList;
    const [numberOfCollisions, setNumberOfCollisions] = useState(10);
    if(collisions){
        //console.log(collisions)
    }
    //console.log((collisions && collisions[0].participant))
    //console.log(loading)

    const showCollisionsHandler = ()=>{
        let newNumberOfCollisions = numberOfCollisions == 10? 600:10
        setNumberOfCollisions(newNumberOfCollisions);

    }
    useEffect(() => {
      dispatch(listCollisions());
      
    }, [
      dispatch,
      // successCreate,
      // successUpdate,
    ]);
      const headers = ['Company', 'Accident Date','Description','Mode','Damage']
      //const data = [{"Id":1, "details":{}}]
      return (
          <div className="collisionTable">
              {loading && <Loading />}
        
              <Table  responsive>
              <thead>
                  <tr>
                  {headers.map((tableHeader, index) => (
                      <th key={index}>{tableHeader}</th>
                  ))}
                  </tr>
              </thead>
              <tbody >
              {collisions && (collisions.filter((col)=> col.company !== "").splice(0,numberOfCollisions).map((col)=>{
                  return <tr key={col._id}>
                      <td >{col.company}</td>
                      <td>{col.accidentDate}</td>
                      <td>{col.description}</td>
                      <td>{col.mode}</td>
                      <td>{col.damage}</td>
                  </tr>
                 
              })) 
              
    
          }
                            <tr></tr>
                </tbody>
              
              </Table>
              <Button onClick={() => showCollisionsHandler()}>Show {numberOfCollisions ===10?"All":"Less"}</Button >

          </div>
      )
}

export default Collision;