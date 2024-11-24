var database = require("../database/config")

function publicar(comentario, fkMateria, idUsuario) {
    var instrucao = `
        INSERT INTO comentario (fkusuario, fkmateria, conteudo, dataPublicacao) VALUES ('${idUsuario}','${fkMateria}','${comentario}', default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkMateria) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            c.conteudo,
            u.nome
        FROM comentario as c
            INNER JOIN materia as m
                ON c.fkMateria = m.idMateria
            INNER JOIN usuario as u
                ON c.fkUsuario = u.idUsuario
                    WHERE m.idMateria = ${fkMateria};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    listar
};