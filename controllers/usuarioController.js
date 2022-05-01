const db = require('../models')

const Usuario = db.usuarios

const addUsuario = async (req, res) => {
    let info = {
        nome: req.body.Nome_completo,
        email: req.body.Email,
        senha: req.body.Senha,
        nascimento: req.body.Data_de_nascimento,
        uf: req.body.UF,
        cidade: req.body.Cidade_de_residencia,
        escolaridade: req.body.Escolaridade
    }

    const usuario = await Usuario.create(info)
    res.status(200).send(usuario)
    console.log(usuario)
}

const getAllUsuarios = async (req, res) => {

    let usuarios = await Usuario.findAll({})
    res.send(usuarios).send(usuarios)

}


const getOneUsuario = async (req, res) => {

    let id = req.params.id
    let usuarios = await Usuario.findOne({ where: {id}})
    res.send(200).send(usuarios)

}

const updateUsuario = async (req, res) => {

    let id = req.params.id
    
    const usuario = await Usuario.update(req.body, {where: {id: id}})
    res.status(200).send(usuario)
}

const deleteUsuario = async (req, res) => {

    let id = req.params.id
    
    await Usuario.destroy({where: {id: id}})

    res.status(200).send('Usuário deletado!')
}



module.exports = {
    addUsuario,
    getAllUsuarios,
    getOneUsuario,
    updateUsuario,
    deleteUsuario
}