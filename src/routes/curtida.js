var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtir", function (req, res) {
    curtidaController.curtir(req, res);
});

router.delete("/deletar:idUsuario", function (req, res) {
    curtidaController.deletar(req, res);
});

module.exports = router;