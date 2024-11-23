var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.post("/publicar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    comentarioController.publicar(req, res);
});

module.exports = router;