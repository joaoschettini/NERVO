var database = require("../database/config")

function listarArtista(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarArtista()");
    var instrucaoSql = `
        SELECT 
            artistaFav
        FROM usuario
        WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGenero(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarGenero()");
    var instrucaoSql = `
        SELECT 
            generoFav1,
            generoFav2,
            generoFav3
        FROM usuario
        WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoComentarios(idUsuario) {
    var instrucaoSql = `
        SELECT 
            count(idComentario) as qtdComentarios,
            DATE(dataPublicacao) as dataPublicacao
        FROM comentario 
        JOIN usuario 
        ON fkUsuario = idUsuario 
        WHERE idUsuario = ${idUsuario}
        GROUP BY DATE(dataPublicacao);
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function graficoCurtidas(idUsuario) {
    var instrucaoSql = `
    SELECT 
    count(idCurtida) as qtdCurtidas,
    DATE(dataCurtida) as dataCurtida
    FROM curtida 
    JOIN usuario 
    ON fkUsuario = idUsuario 
    WHERE idUsuario = ${idUsuario}
    GROUP BY DATE(dataCurtida);
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarNivel(idUsuario) {
    var instrucaoSql = `
        SELECT 
            count(idComentario) as qtdComentarios
        FROM comentario 
        JOIN usuario 
        ON fkUsuario = idUsuario 
        WHERE idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarArtista,
    listarGenero,
    graficoComentarios,
    graficoCurtidas,
    atualizarNivel
};