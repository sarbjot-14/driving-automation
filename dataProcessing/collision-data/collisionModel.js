import mongoose from "mongoose";

const collisionSchema = mongoose.Schema(
  {
    company: {
      type: String,
   
    },
    accidentDate: {
      type: String,
      required: true,
    },
    description:{
      type: String,
      
    },
    mode: {
      type: String,
      required: true,
    },
    damage: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);

const Collision = mongoose.model("Collision", collisionSchema);

export default Collision;


// {
//   "lidar":{
//       "content":"Waymo uses 5 lidars version 5 made in house",
//       "suggestions":[{"content":"Waymo uses 3 lidars version 1","user":"Jack","email":"sarb@sfu.com"}]
//   }
// }