const express = require("express");
const router = express.Router();

const exemploController = require("../controllers/exemploControllers")
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");

const { checkAuth } = require("../middlewares/auth");

//rotas comuns
router.get("/lista", exemploController.exibeTodos)
router.post("/novoproduto", exemploController.cadastraProduto)
router.delete("/deletaproduto/:id", checkAuth, exemploController.deletaProduto)

//rotas de autenticação
router.get("/listausers", userController.exibeUsers)
router.post("/novousuario", userController.createUser);
router.post("/login", authController.login);

module.exports = router;