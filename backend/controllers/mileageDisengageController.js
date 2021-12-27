import mileageDisengage from "../../dataProcessing//mileage/mileageDisengageModel.js"
import asyncHandler from "express-async-handler";

// @desc    Get logged in user techStacks
// @route   GET /api/techStacks
// @access  Private
const getMileageDisengage = asyncHandler(async (req, res) => {
  const milesDisengage = await mileageDisengage.find({  });
  //console.log(milesDisengage)
  res.json(milesDisengage);

  
});



export {  getMileageDisengage };
