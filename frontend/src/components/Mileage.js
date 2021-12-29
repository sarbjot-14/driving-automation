import React , { useEffect, useState } from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useDispatch,useSelector } from "react-redux";
import { listMileageDisengage } from "../actions/listMileageDisengageActions";

const data = [
  {
    "year": "Jan 2019",
    "Waymo": 3432,
    "Cruise": 2342,
    "Apple":1000
},
{
    "year": "Feb 2019",
    "Waymo": 2342,
    "Cruise": 3246,
    "Apple":5000
},
{
    "year": "Mar 2019",
    "Waymo": 4565,
    "Cruise": 4556,
    "Apple":4000
},
{
    "year": "Apr 2019",
    "Waymo": 6654,
    "Cruise": 4465,
    "Apple":3000
},
{
    "year": "May 2019",
    "Waymo": 8765,
    "Cruise": 4553,
    "Apple":4000
},
  {
      "year": "Jan 2020",
      "Waymo": 3432,
      "Cruise": 2342,
      "Apple":1000
  },
  {
      "year": "Feb 2020",
      "Waymo": 2342,
      "Cruise": 3246,
      "Apple":5000
  },
  {
      "year": "Mar 2020",
      "Waymo": 4565,
      "Cruise": 4556,
      "Apple":4000
  },
  {
      "year": "Apr 2020",
      "Waymo": 6654,
      "Cruise": 4465,
      "Apple":3000
  },
  {
      "year": "May 2020",
      "Waymo": 8765,
      "Cruise": 4553,
      "Apple":4000
  },
  {
    "year": "Jan 2021",
    "Waymo": 3432,
    "Cruise": 2342,
    "Apple":1000
},
{
    "year": "Feb 2021",
    "Waymo": 2342,
    "Cruise": 3246,
    "Apple":5000
},
{
    "year": "Mar 2021",
    "Waymo": 4565,
    "Cruise": 4556,
    "Apple":4000
},
{
    "year": "Apr 2021",
    "Waymo": 6654,
    "Cruise": 4465,
    "Apple":3000
},
{
    "year": "May 2021",
    "Waymo": 8765,
    "Cruise": 4553,
    "Apple":4000
},
  {
      "year": "Jan 2022",
      "Waymo": 3432,
      "Cruise": 2342,
      "Apple":1000
  },
  {
      "year": "Feb 2022",
      "Waymo": 2342,
      "Cruise": 3246,
      "Apple":5000
  },
  {
      "year": "Mar 2022",
      "Waymo": 4565,
      "Cruise": 4556,
      "Apple":4000
  },
  {
      "year": "Apr 2022",
      "Waymo": 6654,
      "Cruise": 4465,
      "Apple":3000
  },
  {
      "year": "May 2022",
      "Waymo": 8765,
      "Cruise": 4553,
      "Apple":4000
  }
]

const  Mileage = () =>{
    const dispatch = useDispatch();

    const mileageDisengagementList = useSelector((state) => state.mileageDisengageList);
    const { loading, error, mileageDisengage } = mileageDisengagementList;
    //let mileage = []
    //let [mileage, setMileage] = useState([]);
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
    if(typeof mileageDisengage != "underfined"){
        //console.log(mileageDisengage)
        //console.log(Object.keys(mileageDisengage[0]).filter((item)=> item !== 'year').map((elem)=>elem))
        try{
            theKeys = mileageDisengage?(Object.keys(mileageDisengage[0]).filter((item)=> item !== 'year').map((elem)=>elem)):[];
            theKeys = theKeys.concat(Object.keys(mileageDisengage[1]).filter((item)=> item !== 'year').map((elem)=>elem))
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
                
                <LineChart width={600} height={700} data={mileageDisengage?mileageDisengage:[]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {mileageDisengage && (newKeys.map((elem)=>{
                    return <Line type="monotone" key={elem.theKey} dataKey={elem.theKey} stroke={elem.color} />
                }))}

               
            </LineChart>

            </div>
            
           
        )
    };


export default Mileage;