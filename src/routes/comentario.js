var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.post("/publicar", function (req, res) {
    comentarioController.publicar(req, res);
});

router.get("/listar:fkMateria", function (req, res) {
    comentarioController.listar(req, res);
});

module.exports = router;