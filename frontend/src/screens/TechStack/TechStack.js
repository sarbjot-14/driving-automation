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
    const headers = ['Participant','Model','Lidar', 'Camera', 'Radar','Level','Compute','Providing Service']
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
               <td>{stack.lidar}</td>
               <td>{stack.camera}</td>
               <td>{stack.radar}</td>
               <td>{stack.level}</td>
               <td>{stack.compute}</td>
               <td>{stack.providingService}</td>
               </tr></tbody>
        })}
                {/* <tr>
                <td>Waymo</td>
                {Array.from({ length: 8 }).map((_, index) => (
                    <td key={index}><ul>
                    <li>Coffee ohh let it fall down arms legs</li>
                    <li>Tea</li>
                    <li>Milk least of my care, so let me ask youuu. Dreaming. Real as stone of your crown</li>
                  </ul> {index}</td>
                ))}
                </tr>
                <tr>
                <td>Cruise</td>
                {Array.from({ length: 8 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr>
                <tr>
                <td>Argo</td>
                {Array.from({ length: 8 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr> */}
            
            </Table>
        </div>
    )
}

export default TechStack
