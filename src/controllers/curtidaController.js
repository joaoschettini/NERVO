var curtidaModel = require("../models/curtidaModel");

function curtir(req, res) {
    var fkMateria = req.body.fkMateriaServer;
    var idUsuario = req.body.idUsuarioServer;

    curtidaModel.curtir(fkMateria, idUsuario)
}

function deletar(req,res) {
    var idUsuario = req.params.idUsuario;

    curtidaModel.deletar(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar a curtida: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    curtir,
    deletar
}