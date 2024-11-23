var comentarioModel = require("../models/comentarioModel");

function publicar(req, res) {
    var comentario = req.body.comentarioServer;
    var fkMateria = req.body.fkMateriaServer;
    var idUsuario = req.body.idUsuarioServer;

    if (comentario == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    }

    comentarioModel.publicar(comentario, fkMateria, idUsuario)
}

module.exports = {
    publicar
}