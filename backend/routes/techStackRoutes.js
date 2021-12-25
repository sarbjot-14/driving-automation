import express from "express";
import {
  getTechStacks,

} from "../controllers/techStackController.js";
const router = express.Router();
//import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getTechStacks);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .delete(protect, DeleteNote)
//   .put(protect, UpdateNote);
  
//router.route("/create").post(protect, CreateNote);

export default router;
