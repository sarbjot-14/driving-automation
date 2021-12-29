import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {  listTechStacks } from "../../actions//techStackActions";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function TechStack() {
    const dispatch = useDispatch();

  const techStackList = useSelector((state) => state.techStackList);
  const { loading, error, techStacks } = techStackList;
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
    const data = [{"Id":1, "details":{}}]
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
        techStacks.map((stack)=>{
           return <tbody><tr key={stack._id}>
               <td>{stack.participant}</td>
               <td>{stack.model}</td>
               <td>{stack.lidar.trim() !==""?(stack.lidar.split('|').map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.camera.trim() !==""?(stack.camera.split('|').map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.radar.trim() !==""?(stack.radar.split('|').map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.compute.trim() !==""?(stack.compute.split('|').map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               <td>{stack.level}</td>
               <td>{stack.providingService.trim() !==""?(stack.providingService.split('|').map((point)=>{return <li>{point.trim()}</li>})):""}</td>
               </tr></tbody>
        })}
             
            
            </Table>
        </div>
    )
}

export default TechStack
