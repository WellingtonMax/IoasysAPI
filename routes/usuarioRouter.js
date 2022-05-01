const { addUsuario, getAllUsuarios, getOneUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController.js");

const router = require("express").Router();

router.post("/addUsuario", addUsuario);

router.get("/allUsuarios", getAllUsuarios);

router.get("/:id", getOneUsuario);

router.put("/:id", updateUsuario);

router.delete("/:id", deleteUsuario);


module.exports = router;
