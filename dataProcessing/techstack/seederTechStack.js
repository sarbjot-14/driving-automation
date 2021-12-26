import mongoose from "mongoose";
import dotenv from "dotenv";

import colors from "colors";
//import users from "./data/users.js";

import TechStack from "./techModel.js";
import connectDB from "./db.js";
import axios from "axios"


dotenv.config();
connectDB();

// Be careful running this scrip. Will delete valuable data!!!
// Change schema name in techModel.js!!
// Be carefule with deleteMany function. I have commented out for saftey!

// how to add key value dynamically:
const existing = {"Waymo":3333}
const obj = {"name":"zoox","mileage":2333}
const newOne = {...existing, [obj['name']]: obj['mileage']}


const getTech = async (element) => {
  try {
    return await axios.get('https://avtest.nhtsa.dot.gov/api/trackers/'+ element.toString())
  } catch (error) {
    console.error(error)
  }
}

const getId = async (element) => {
  try {
    return await axios.get('https://avtest.nhtsa.dot.gov/api/trackers?state=' + element.toLowerCase())
  } catch (error) {
    console.error(error)
  }
}
const createModelLabel = (obj)=>{
  console.log(obj)
  let label =  `${obj.BaseVehicleManufacturer||""} ${obj.BaseMake || ""} ${obj.BaseModel || ""} ${obj.BaseSeries || ""} ${obj.BaseVehicleType || ""}`
  label = label.trim();
  console.log(label)
  return label;
}
const uploadData =  async (rawData) => {
 
    let techStacks = [];
    for(let i = 0 ;i < rawData.length;i++){
      techStacks.push({
        id: rawData[i].Id,
        participant: rawData[i].Participant || "",
        display:
           true,
        model: createModelLabel(rawData[i]),
        imageUrl: rawData[i].imageUrl || "",
        testVehicleDescriptionLink: rawData[i].TestVehicleDescriptionLink ||"",
        lidar:  "",
        camera: "",
        radar:  "",
        level: "",
        compute: "",
        providingService: rawData[i].ProvidingService ||"",
        // use this template for suggestions:
        //suggestions:[{"model":"argo","lidar":"","camera":"","radar":"","level":"0","compute":"", "sources":[]}]
        suggestions:[]
      }) 
      
    }
    // filter
  //console.log(techStacks)
  techStacks = techStacks.filter(stack => ! (stack.participant.includes('NHTSA') || stack.participant.includes('Department')));
  techStacks = techStacks.filter(stack => ! (stack.participant.includes('Office') || stack.participant.includes('Authority')|| stack.participant.includes('Agency')|| stack.participant.includes('University')|| stack.participant.includes('State')));  

  // remove duplicates
  techStacks = techStacks.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.participant === value.participant && t.model === value.model
  ))
)

      try {
          // DO NOT UNCOMMETN!!!! THIS WILL DELETE IMOPORTANT DATA!
          //await TechStack.deleteMany();
      
          //UNCOMMENT AS NEEDED
          //await TechStack.insertMany(techStacks);

          console.log("Data Imported!".green.inverse);
          process.exit();
        } catch (error) {
          console.error(`${error}`.red.inverse);
          process.exit(1);
        }
}

const importData = async () => {
  const allTech = []
  const states = ['AL','MO','AK','MT','AZ','NE','AR','NV','CA','NH','CO','NJ','CT','NM','DE','NY','DC','NC','FL','ND','GA','OH','HI','OK','ID','OR','IL','PA','IN','RI','IA','SC','KS','SD','KY','TN','LA','TX','ME','UT','MD','VT','MA','VA','MI','WA','MN','WV','MS','WI','WY']
  //const states = ['CA']
  for (const state of states) {
    let data = await getId(state);
    if(data.data){
      for(let i =0;i<data.data.length;i++){
        if(data.data[i]){
          let autoData = await getTech(data.data[i].Id);
          console.log(autoData.data)
          allTech.push(autoData.data)
        }
      }
    }
  
};
return allTech;

  
};




if (process.argv[2] === "-d") {
  //destroyData();
} else {
  const rawData = await importData();
  uploadData(rawData)
}
