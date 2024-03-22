import { Router } from "express";
import { getPersona, getPersonas, createPersona, updatePersona, deletePersona } from "../controllers/persona.controller.js";

const router = Router();

router.get('/persona', getPersonas)

router.get('/persona/:id', getPersona)

router.post('/persona', createPersona)

router.patch('/persona/:id', updatePersona)

router.delete('/persona/:id', deletePersona)

export default router;