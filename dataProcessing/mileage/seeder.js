import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
//import users from "./data/users.js";

import MilesDisengage from "./mileageDisengageModel.js";
import connectDB from "./db.js";


connectDB();

const existing = {"Waymo":3333}
const obj = {"name":"zoox","mileage":2333}
const newOne = {...existing, [obj['name']]: obj['mileage']}

console.log(newOne);
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// const fs = require('fs');
// const path = require('path');
// const neatCsv = require('neat-csv');
import fs from "fs";
import path from "path";
import neatCsv from "neat-csv";

const readCSV = ()=>{
  
}

const importData = async () => {

  // read from csv
  var uploadDataMileage =[]
  var uploadDataDisengage =[]
  const file19 = './data/2019AutonomousMileageReports.csv'
  const file20 = './data/2020-Autonomous-Mileage-Reports.csv'
  const filePath = path.join(__dirname, file20);
fs.readFile(filePath, (error, data) => {
  if (error) {
    return console.log('error reading file');
  }
  neatCsv(data)
    .then((parsedData) => {
      console.log(parsedData[0])
      let manu = parsedData[0].Manufacturer
      let anual = 0;
      let disengage = 0;
      for(let i = 0;i < parsedData.length; i++){
        
        // console.log("manu " +manu)
        //   console.log("anu " + anual)
        if(manu != parsedData[i]['Manufacturer']){
          
          // add this obj to the array with the new manu and anual
          
          uploadDataMileage.push({[manu.replace(/\./g,'')]:anual})
          uploadDataDisengage.push({[manu.replace(/\./g,'')]:disengage})
          //console.log(uploadDataMileage)
          anual =0;
          disengage = 0;
          
        }
        anual += parseInt(parsedData[i]['ANNUALTOTAL'])
        disengage += parseInt(parsedData[i]['AnnualTotalofDisengagements'])
        manu = parsedData[i]['Manufacturer']
        
      }
      
       console.log(uploadDataDisengage)
       console.log(uploadDataMileage)
      
    });
});

// upload to mongodb

  
  const uploadMileageDisengage = {
    year:"2020",
    disengagements:[
      { 'AImotive Inc': 113 },
      { 'Apple Inc': 130 },
      { 'Aurora Innovation, Inc': 37 },
      { 'AutoX Technologies, Inc': 2 },
      { 'BMW of North America': 3 },
      { 'CRUISE LLC': 27 },
      { 'DiDi Research America LLC': 2 },
      { EasyMile: 128 },
      { 'Gatik AI Inc': 11 },
      { Lyft: 123 },
      { 'Mercedes Benz Research & Development North America, Inc': 1167 },
      { 'Nissan North America, INC': 4 },
      { 'Nuro, Inc': 11 },
      { NVIDIA: 125 },
      { 'PONYAI, INC': 21 },
      { 'QUALCOMM TECHNOLOGIES, INC': 90 },
      { 'Ridecell Inc': 189 },
      { 'SF Motors, Inc': 61 },
      { 'Telenav, Inc': 2 },
      { 'Toyota Research Institute': 1215 },
      { 'Udelv, Inc': 49 },
      { 'Valeo North America Inc': 99 },
      { 'Waymo LLC': 21 },
      { 'WeRide Corp': 2 }
    ],
    mileage: [
      { 'AImotive Inc': 2987 },
      { 'Apple Inc': 18791 },
      { 'Aurora Innovation, Inc': 12197 },
      { 'AutoX Technologies, Inc': 40734 },
      { 'BMW of North America': 122 },
      { 'CRUISE LLC': 5254 },
      { 'DiDi Research America LLC': 10395 },
      { EasyMile: 424 },
      { 'Gatik AI Inc': 2352 },
      { Lyft: 32721 },
      { 'Mercedes Benz Research & Development North America, Inc': 29980 },
      { 'Nissan North America, INC': 394 },
      { 'Nuro, Inc': 55361 },
      { NVIDIA: 3033 },
      { 'PONYAI, INC': 225496 },
      { 'QUALCOMM TECHNOLOGIES, INC': 1727 },
      { 'Ridecell Inc': 147 },
      { 'SF Motors, Inc': 874 },
      { 'Telenav, Inc': 4 },
      { 'Toyota Research Institute': 2875 },
      { 'Udelv, Inc': 66 },
      { 'Valeo North America Inc': 49 },
      { 'Waymo LLC': 628781 },
      { 'WeRide Corp': 13014 }
    ]
  }
  console.log(uploadMileageDisengage)
  
  try {
    //await MilesDisengage.deleteMany();
 
    await MilesDisengage.create(uploadMileageDisengage);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// const destroyData = async () => {
//   try {
//     await Note.deleteMany();
//     await User.deleteMany();

//     console.log("Data Destroyed!".red.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`.red.inverse);
//     process.exit(1);
//   }
// };

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
