import { Router } from "express";
import { crearorden } from "../api";

const router = Router()

router.post('/payment', crearorden)
export default router