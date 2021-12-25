import techStack from "../../dataProcessing//techstack/techModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get logged in user techStacks
// @route   GET /api/techStacks
// @access  Private
const getTechStacks = asyncHandler(async (req, res) => {
  const techStacks = await techStack.find({  });
  res.json(techStacks);
  
});



export {  getTechStacks };
