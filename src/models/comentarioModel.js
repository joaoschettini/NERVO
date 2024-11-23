var database = require("../database/config")

function publicar(comentario, fkMateria, idUsuario) {
    var instrucao = `
        INSERT INTO comentario (fkusuario, fkmateria, conteudo, dataPublicacao) VALUES ('${idUsuario}','${fkMateria}','${comentario}', default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar
};