var perfilModel = require("../models/perfilModel");

function listarArtista(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.listarArtista(idUsuario).then(function (resultado) {
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

function listarGenero(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.listarGenero(idUsuario).then(function (resultado) {
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

function graficoComentarios(req, res) {
    var idUsuario = req.params.idUsuario;
    
    perfilModel.graficoComentarios(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoCurtidas(req, res) {
    var idUsuario = req.params.idUsuario;
    
    perfilModel.graficoCurtidas(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function atualizarNivel(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.atualizarNivel(idUsuario).then(function (resultado) {
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
    listarArtista,
    listarGenero,
    graficoComentarios,
    graficoCurtidas,
    atualizarNivel
}