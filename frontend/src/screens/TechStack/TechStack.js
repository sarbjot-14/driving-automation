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
    console.log(techStacks)

  useEffect(() => {
    dispatch(listTechStacks());
    
  }, [
    dispatch,
    // successCreate,
    // successUpdate,
  ]);
    const headers = ['Model','Cameras', 'Lidar', 'Radar','Software','Chip','Cost of Vehicle']
    const data = [{"Id":1, "details":{}}]
    return (
        <div>
            <Table responsive>
            <thead>
                <tr>
                <th>Company</th>
                {headers.map((tableHeader, index) => (
                    <th key={index}>{tableHeader}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                <tr>
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
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default TechStack
