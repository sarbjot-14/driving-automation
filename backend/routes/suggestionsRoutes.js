import express from "express";
import {

  updateSuggestions,
} from "../controllers/updateSuggestions.js";
const router = express.Router();

router.route("/update").post(updateSuggestions);

export default router;
