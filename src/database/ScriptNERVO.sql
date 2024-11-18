create database nervo;

use nervo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

create table materia (
idMateria int primary key auto_increment,
titulo varchar(45),
dono varchar(45),
dataPublicacao date
) auto_increment = 100 ; 

create table comentario (
idusuario int auto_increment,
fkusuario int,
fkmateria int,
primary key (idusuario, fkusuario, fkmateria),
conteudo varchar(500),
dataPublicacao date
);
