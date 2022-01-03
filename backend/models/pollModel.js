import mongoose from "mongoose";

const pollsSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    participant: {
      type: String,
      required: true,
    },
    suggestions: {
      type: Array,
     
    }

  },
  {
    timestamps: true,
  }
);

const pollsStack = mongoose.model("Polls", pollsSchema);

export default Polls;


// {
//   "lidar":{
//       "content":"Waymo uses 5 lidars version 5 made in house",
//       "suggestions":[{"content":"Waymo uses 3 lidars version 1","user":"Jack","email":"sarb@sfu.com"}]
//   }
// }