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

function listar(req, res) {
    var fkMateria = req.params.fkMateria;

    // if (fkMateria == undefined) {
    //     res.status(400).send("Seu comentario está undefined!");
    // }

    comentarioModel.listar(fkMateria).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    publicar,
    listar
}