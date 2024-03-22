import { Router } from "express";
import {
  createPerson,
  deletePerson,
  getPerson,
  getPersons,
  updatePerson,
} from "../controllers/person.controller.js";

const router = Router();

router.get("/person", getPersons);

router.get("/person/:id", getPerson);

router.post("/person", createPerson);

router.patch("/person/:id", updatePerson);

router.delete("/person/:id", deletePerson);

export default router;
