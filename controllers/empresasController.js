const db = require("../models");

const Empresa = db.empresas;

const addEmpresa = async (req, res) => {
  let info = {
    Nome: req.body.Nome,
    Descricao: req.body.Descricao,
    Area_de_atuacao: req.body.Area_de_atuacao,
    Diretor: req.body.Diretor,
    Ano_de_fundacao: req.body.Ano_de_fundacao,
  };

  const empresa = await Empresa.create(info);
  res.status(200).send(empresa);
  console.log(empresa);
};

const getAllEmpresas = async (req, res) => {
  let empresas = await Empresa.findAll({});
  res.send(200).send(empresas);
};

const getOneEmpresa = async (req, res) => {
  let id = req.params.id;
  let empresas = await Empresa.findOne({ where: { id } });
  res.send(200).send(empresas);
};

const updateEmpresa = async (req, res) => {
  let id = req.params.id;

  const empresa = await Empresa.update(req.body, { where: { id: id } });
  res.status(200).send(empresa);
};

const deleteEmpresa = async (req, res) => {
  let id = req.params.id;

  await Empresa.destroy({ where: { id: id } });

  res.status(200).send("Empresa deletada!");
};

module.exports = {
  addEmpresa,
  getAllEmpresas,
  getOneEmpresa,
  updateEmpresa,
  deleteEmpresa,
};
