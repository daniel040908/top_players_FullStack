import { Router } from "express";
import * as usuarioController from "../controllers/usuariosController.js"

const router =  Router()

router.post("/login", usuarioController.login)
router.get("/",usuarioController.listar);
router.get("/:id",usuarioController.buscarPorId);
router.post("/",usuarioController.criar);

export default router