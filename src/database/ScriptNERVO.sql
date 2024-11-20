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
); 

create table comentario (
idComentario int auto_increment,
fkusuario int,
fkmateria int,
primary key (idcomentario, fkusuario, fkmateria),
conteudo varchar(500),
dataPublicacao date,
constraint fkComentarioUsuario
foreign key (fkusuario) references usuario(idusuario),
constraint fkComentarioMateria
foreign key (fkmateria) references materia(idmateria)
);

create table curtida (
idCurtida int auto_increment,
fkusuario int,
fkmateria int,
primary key (idcurtida, fkusuario, fkmateria),
dataCurtida date,
constraint fkCurtidaUsuario
foreign key (fkusuario) references usuario(idusuario),
constraint fkCurtidaMateria
foreign key (fkmateria) references materia(idmateria)
);

