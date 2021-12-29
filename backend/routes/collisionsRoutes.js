import express from "express";
import {
  getCollisions,

} from "../controllers/collisionController.js";
const router = express.Router();
//import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getCollisions);


export default router;
