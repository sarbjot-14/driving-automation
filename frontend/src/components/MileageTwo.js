import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    "name": "Jan 2019",
    "Waymo": 3432,
    "Cruise": 2342,
    "Apple":1000
},
{
    "name": "Feb 2019",
    "Waymo": 2342,
    "Cruise": 3246,
    "Apple":5000
},
{
    "name": "Mar 2019",
    "Waymo": 4565,
    "Cruise": 4556,
    "Apple":4000
},
{
    "name": "Apr 2019",
    "Waymo": 6654,
    "Cruise": 4465,
    "Apple":3000
},
{
    "name": "May 2019",
    "Waymo": 8765,
    "Cruise": 4553,
    "Apple":4000
},
  {
      "name": "Jan 2020",
      "Waymo": 3432,
      "Cruise": 2342,
      "Apple":1000
  },
  {
      "name": "Feb 2020",
      "Waymo": 2342,
      "Cruise": 3246,
      "Apple":5000
  },
  {
      "name": "Mar 2020",
      "Waymo": 4565,
      "Cruise": 4556,
      "Apple":4000
  },
  {
      "name": "Apr 2020",
      "Waymo": 6654,
      "Cruise": 4465,
      "Apple":3000
  },
  {
      "name": "May 2020",
      "Waymo": 8765,
      "Cruise": 4553,
      "Apple":4000
  }
]

const  MileageTwo = () =>{

        return (
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Waymo" stroke="#0095FF" />
                <Line type="monotone" dataKey="Cruise" stroke="#FF0000" />
                <Line type="monotone" dataKey="Apple" stroke="#FF0000" />
            </LineChart>
        )
    };


export default MileageTwo;