module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define("usuario", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_de_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    escolaridade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  return Usuarios;
};
