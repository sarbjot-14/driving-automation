import express from "express";
import {
    getMileageDisengage,

} from "../controllers/mileageDisengageController.js";
const router = express.Router();
//import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getMileageDisengage);


export default router;
