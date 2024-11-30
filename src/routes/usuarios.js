var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/cadastrarGenero", function (req, res) {
    usuarioController.cadastrarGenero(req, res);
});

router.put("/cadastrarArtista", function (req, res) {
    usuarioController.cadastrarArtista(req, res);
});

module.exports = router;