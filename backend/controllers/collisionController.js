import collision from "../../dataProcessing/collision-data/collisionModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get logged in user collisions
// @route   GET /api/collisions
// @access  Private
const getCollisions = asyncHandler(async (req, res) => {
  const collisions = await collision.find({  });
  res.json(collisions);
  
});



export {  getCollisions };
