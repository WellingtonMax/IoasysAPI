module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define(
    "usuario",
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nome_completo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Data_de_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UF: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cidade_de_residencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Escolaridade: {
        type: DataTypes.STRING,
        allowNull: false,
      }},
    {
      timestamps: false,
    }
  );

  return Usuarios;
};
