import express from "express";
import { addConferencia } from '../controllers/controller.js'
const router = express.Router()

router.post("/novoRegistro", addConferencia)

export default router