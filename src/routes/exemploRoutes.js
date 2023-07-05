const express = require("express");
const router = express.Router();
//importa dependencia e inicia o router

const exemploController = require("../controllers/exemploControllers")
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");
/*puxa os controllers:
exemplo cuida dos produtos, o programa normal
user cuida de gerenciamento de usuários (cria user)
auth cuida de autenticação (login)*/
const { checkAuth } = require("../middlewares/auth");
//puxa o auth para checar se o usuário tem permissão de acesso

//rotas comuns
router.get("/lista", exemploController.exibeTodos)
router.post("/novoproduto", exemploController.cadastraProduto)
router.delete("/deletaproduto/:id", checkAuth, exemploController.deletaProduto)
//para autenticação, basta adicionar o checkAuth na rota

//rotas de autenticação
router.get("/listausers", userController.exibeUsers)
router.post("/novousuario", userController.createUser);
router.post("/login", authController.login);

module.exports = router;
//exporta router