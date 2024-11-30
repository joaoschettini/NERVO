var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/listarArtista:idUsuario", function (req, res) {
    perfilController.listarArtista(req, res);
});

router.get("/listarGenero:idUsuario", function (req, res) {
    perfilController.listarGenero(req, res);
});

router.get("/graficoComentarios:idUsuario", function (req, res) {
    perfilController.graficoComentarios(req, res);
});

router.get("/graficoCurtidas:idUsuario", function (req, res) {
    perfilController.graficoCurtidas(req, res);
});

router.get("/atualizarNivel:idUsuario", function (req, res) {
    perfilController.atualizarNivel(req, res);
});

module.exports = router;