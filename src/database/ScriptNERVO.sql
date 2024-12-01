create database nervo;

use nervo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
artistaFav varchar(50),
generoFav1 varchar(50),
generoFav2 varchar(50),
generoFav3 varchar(50)
);

insert into usuario (nome, email, senha, artistaFav, generoFav1, generoFav2, generoFav3) values
('João Roberto','joao.santos@gmail.com','Sptech@2024','Radiohead','Rock','Rap','Pop'),
('Arianna Elis','arianna.elis@gmail.com','Sptech@2024','Elis Regina','Pop','Reggae','Mpb');

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

insert into comentario (fkusuario, fkmateria, conteudo, dataPublicacao) values
(1, 1, 'Minha banda favorita!', '2024-11-10 14:35:00'),
(1, 1, 'Quando tinha 16 anos ouvi esse álbum pela primeira vez, mudou minha vida', '2024-11-10 18:22:00'),
(1, 3, 'Parabéns pela review', '2024-11-12 09:15:00'),
(2, 4, 'Simplismente álbum do ano', '2024-11-15 10:45:00'),
(2, 4, 'Charli arrasou demais, minha música favorita é Apple', '2024-11-15 20:30:00'),
(2, 2, 'Orgulho de ser brasileira!', '2024-11-18 11:00:00'),
(2, 2, 'Álbum clássico e atemporal', '2024-11-18 16:50:00'),
(2, 1, 'Muito emocional esse álbum', '2024-11-20 08:15:00'),
(2, 3, 'Muito lindo, obra prima', '2024-11-22 22:40:00');

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

insert into curtida (fkusuario, fkmateria, dataCurtida) values
(1, 1, '2024-11-10 10:00:00'),
(1, 2, '2024-11-10 11:30:00'),
(1, 3, '2024-11-10 14:00:00'),
(2, 4, '2024-11-12 10:15:00'),
(2, 2, '2024-11-12 11:45:00'),
(1, 4, '2024-11-15 16:20:00'),
(2, 1, '2024-11-20 09:30:00'),
(2, 2, '2024-11-23 14:10:00');

select * from usuario;
select * from comentario;
select * from curtida;
select * from materia;