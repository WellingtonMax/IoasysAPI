const db = require("../models");

const Usuario = db.usuarios;

const addUsuario = async (req, res) => {
  let info = {
    id_usuario: req.body.id_usuario,
    Nome_completo: req.body.Nome_completo,
    Email: req.body.Email,
    Senha: req.body.Senha,
    Data_de_nascimento: req.body.Data_de_nascimento,
    UF: req.body.UF,
    Cidade_de_residencia: req.body.Cidade_de_residencia,
    Escolaridade: req.body.Escolaridade,
  };

  const usuario = await Usuario.create(info);
  res.status(200).send(usuario);
  console.log(usuario);
};

const getAllUsuarios = async (req, res) => {
  let usuarios = await Usuario.findAll({});
  res.send(usuarios).send(usuarios);
};

const getOneUsuario = async (req, res) => {
  let id = req.params.id;
  let usuarios = await Usuario.findOne({ where: { id } });
  res.send(200).send(usuarios);
};

const updateUsuario = async (req, res) => {
  let id = req.params.id;

  const usuario = await Usuario.update(req.body, { where: { id: id } });
  res.status(200).send(usuario);
};

const deleteUsuario = async (req, res) => {
  let id = req.params.id;

  await Usuario.destroy({ where: { id: id } });

  res.status(200).send("Usuário deletado!");
};

module.exports = {
  addUsuario,
  getAllUsuarios,
  getOneUsuario,
  updateUsuario,
  deleteUsuario,
};
