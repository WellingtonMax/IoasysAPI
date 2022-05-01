CREATE DATABASE ioasys;

CREATE TABLE usuarios (
    id_usuario INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nome_completo VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL, 
    Senha VARCHAR(15) NOT NULL,
    Data_de_nascimento DATE NOT NULL, 
    UF VARCHAR(5) NOT NULL, 
    Cidade_de_residencia VARCHAR(20) NOT NULL,
    Escolaridade VARCHAR(15) NOT NULL
);

CREATE TABLE empresas (
    id_empresas INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Descricao TEXT(400),
    Area_de_atuacao VARCHAR(50),
    Diretor VARCHAR(50),
    Ano_de_fundacao DATE
);




