import express from "express";
import { addConferencia, exConferencia } from '../controllers/controller.js'
const router = express.Router()

router.post("/novoRegistro", addConferencia)
router.delete("/apagarRegistro", exConferencia)

export default router