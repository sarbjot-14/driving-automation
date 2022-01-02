import React, { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {  listTechStacks } from "../../actions//techStackActions";
import Suggestion from "../../components/Suggestion"
import Loading from "../../components/Loading";

function TechStack() {
    const dispatch = useDispatch();
  const techStackList = useSelector((state) => state.techStackList);
  const { loading,  techStacks } = techStackList;
  //console.log((techStacks && techStacks[0].participant))
  console.log(loading)
  useEffect(() => {
    dispatch(listTechStacks());
    
  }, [
    dispatch,
    // successCreate,
    // successUpdate,
  ]);
    const headers = ['Participant','Model','Lidar', 'Camera', 'Radar','Compute','Level','Providing Service']
    return (
        <div>
            {loading && <Loading />}
      
            <Table responsive>
            <thead>
                <tr>
                {headers.map((tableHeader, index) => (
                    <th key={index}>{tableHeader}</th>
                ))}
                </tr>
            </thead>
   
            {techStacks &&
        techStacks.filter((f_stack)=> f_stack.display).map((stack)=>{
           return <tbody><tr key={stack._id}>
               <td>{stack.participant}</td>
               <td>{stack.model}</td>
               <td>{stack.lidar.trim() !==""?(stack.lidar.split('-').filter((f)=>f!=="").map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.camera.trim() !==""?(stack.camera.split('-').filter((f)=>f!=="").map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.radar.trim() !==""?(stack.radar.split('-').filter((f)=>f!=="").map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.compute.trim() !==""?(stack.compute.split('-').filter((f)=>f!=="").map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.level}</td>
               <td>{stack.providingService.trim() !==""?(stack.providingService.split('-').filter((f)=>f!=="").map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               </tr></tbody>
        })}
             
            
            </Table>
            <Suggestion/>
        </div>
    )
}

export default TechStack
