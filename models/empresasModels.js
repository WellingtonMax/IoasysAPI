module.exports = (sequelize, DataTypes) => {
    const Empresas = sequelize.define("empresa", {
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AreaDeAtuacao: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      Diretor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AnoDeFundacao: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    })

    return Empresas
  };