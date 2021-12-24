import mongoose from "mongoose";

const techSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    participant: {
      type: String,
      required: true,
    },
    imageUrl:{
      type: String,
      
    },
    display: {
      type: Boolean,
      required: true,
    },
    model: {
      type: String,
      
    },
    imageUrl: {
      type: String,
     
    },
    testVehicleDescriptionLink: {
      type: String,
   
    },
    lidar: {
      type: String,
  
    },
    camera: {
      type: String,
     
    },
    radar: {
      type: String,

    },
    level: {
      type: String,
     
    },
    compute: {
      type: String,
   
    },
    providingService: {
      type: String,
   
    },
    suggestions: {
      type: Array,
     
    }

  },
  {
    timestamps: true,
  }
);

const TechStack = mongoose.model("TechStack", techSchema);

export default TechStack;


// {
//   "lidar":{
//       "content":"Waymo uses 5 lidars version 5 made in house",
//       "suggestions":[{"content":"Waymo uses 3 lidars version 1","user":"Jack","email":"sarb@sfu.com"}]
//   }
// }