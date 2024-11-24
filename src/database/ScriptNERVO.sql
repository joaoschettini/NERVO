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
titulo varchar(100),
dono varchar(45),
dataPublicacao date
);

insert into materia(titulo, dono, dataPublicacao) values 
('OK Computer, o álbum que mudou tudo','João Roberto Schettini Santos','2024-10-20'),
('Clube da Esquina, o álbum perfeito','João Roberto Schettini Santos','2024-10-19'),
('Fishmans, e a melhor performance ao vivo de todos os tempos','João Roberto Schettini Santos','2024-10-18'),
('BRAT, e é uma resenha, mas continua sendo BRAT','João Roberto Schettini Santos','2024-10-17');

create table comentario (
idComentario int auto_increment,
fkusuario int,
fkmateria int,
primary key (idcomentario, fkusuario, fkmateria),
conteudo varchar(500),
dataPublicacao timestamp default current_timestamp,
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
dataCurtida timestamp default current_timestamp,
constraint fkCurtidaUsuario
foreign key (fkusuario) references usuario(idusuario),
constraint fkCurtidaMateria
foreign key (fkmateria) references materia(idmateria)
);

insert into usuario (nome, email, senha) values
('joao','joao@gmail.com','123');

insert into comentario (fkusuario, fkmateria, dataPublicacao) values
(1,1,default);

select * from usuario;
select * from comentario;
