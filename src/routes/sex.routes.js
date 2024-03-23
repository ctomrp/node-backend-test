import { Router } from "express";
import {
  createSex,
  deleteSex,
  getSex,
  getSexes,
  updateSex,
} from "../controllers/sex.controller.js";

const router = Router();

router.get("/sex", getSexes);

router.get("/sex/:id", getSex);

router.post("/sex", createSex);

router.patch("/sex/:id", updateSex);

router.delete("/sex/:id", deleteSex);

export default router;
