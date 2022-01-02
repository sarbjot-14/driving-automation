import asyncHandler from "express-async-handler";
import TechStack from "../../dataProcessing/techstack/techModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const updateSuggestions = asyncHandler(async (req, res) => {
  const { id, participant, model, lidar, camera, radar, level, compute, providingService, suggestions, display } = req.body;
  console.log("in the controller")
  console.log(participant)

  const stack = await TechStack.create({
    id, participant, model, lidar, camera, radar, level, compute, providingService, suggestions, display
  });

  if (stack) {
    res.status(201).json({
      id
    });
  } else {
    res.status(400);
    throw new Error("stack not found");
  }
});

export { updateSuggestions };
