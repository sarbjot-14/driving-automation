import express from "express";
import {
  getTechStacks,

} from "../controllers/techStackController.js";
const router = express.Router();
//import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getTechStacks);


export default router;
