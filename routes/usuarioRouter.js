const usuarioController = require('../controllers/usuarioController.js')

const router = require('express').Router()

router.post('/addUsuario', usuarioController.addUsuario)

router.get('/allUsuarios', usuarioController.getAllUsuarios)

router.get('/:id', usuarioController.getOneUsuario)

router.put('/:id', usuarioController.updateUsuario)

router.delete('/:id', usuarioController.deleteUsuario)

module.exports = router