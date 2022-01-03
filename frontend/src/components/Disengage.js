import React , { useEffect} from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useDispatch,useSelector } from "react-redux";
import { listMileageDisengage } from "../actions/listMileageDisengageActions";


const  Disengage = () =>{
    const dispatch = useDispatch();

    const mileageDisengagementList = useSelector((state) => state.mileageDisengageList);
    const { disengagement } = mileageDisengagementList;

    let theKeys = [];
    let newKeys = [];
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF',  '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    //console.log(mileageDisengage)
    if(typeof disengagement  != "underfined"){
        console.log(disengagement )
        //console.log(Object.keys(disengagement [0]).filter((item)=> item !== 'year').map((elem)=>elem))
        try{
            theKeys = disengagement ?(Object.keys(disengagement[0]).filter((item)=> item !== 'year').map((elem)=>elem)):[];
            theKeys = theKeys.concat(Object.keys(disengagement[1]).filter((item)=> item !== 'year').map((elem)=>elem))
            theKeys = [...new Set(theKeys)];
            for(let i = 0; i<theKeys.length; i++){
                newKeys.push({"theKey":theKeys[i], "color":colorArray[i]})
            }
            //console.log(theKeys)
        } 
        catch{
            theKeys = []
        }
    }
    
   
    
    useEffect(() => {
        dispatch(listMileageDisengage());
 
       
        
      }, [
        dispatch,
        
      ]);
  

        return (
            <div>
                <h2>Disengagements <a href="https://www.dmv.ca.gov/portal/vehicle-industry-services/autonomous-vehicles/">(DMV)</a></h2>
                <LineChart width={600} height={700} data={disengagement ?disengagement :[]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {disengagement  && (newKeys.map((elem)=>{
                    return <Line type="monotone" key={elem.theKey} dataKey={elem.theKey} stroke={elem.color} />
                }))}

               
            </LineChart>

            </div>
            
           
        )
    };


export default Disengage;