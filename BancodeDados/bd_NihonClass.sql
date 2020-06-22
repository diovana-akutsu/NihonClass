create database NihonClass;
use NihonClass;

create table alunos(
ra int primary key auto_increment,
nome varchar(80),
email varchar(80),
senha varchar(80)
)auto_increment = 1000;

create table aulas(
id_aula int primary key
);

create table AlunosAulas(
fk_aluno int,
foreign key (fk_aluno) references alunos (ra),
fk_aula int,
foreign key (fk_aula) references aulas (id_aula),
primary key (fk_aluno, fk_aula),
nota decimal(5,2),
validado int check(validado = '1' or validado = '0')
);

insert into alunos values
(null, 'Diovana Kraml Akutsu', 'Diovana@gmail.com', '11122002');

insert into aulas values
(1);
insert into aulas values
(2);

insert into AlunosAulas values
(1000, 1, '500', 1);
insert into AlunosAulas values
(1000, 2, '500', 1);

select * from AlunosAulas;
select * from alunos;