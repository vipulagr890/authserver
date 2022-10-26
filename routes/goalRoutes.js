import { Router } from "express";
import {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} from "../controllers/goalController.js";

const router = Router();

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

export default router;
