module.exports = (sequelize, DataTypes) => {
  const Empresas = sequelize.define("empresa", {
    id_empresa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Area_de_atuacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Diretor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ano_de_fundacao: {
      type: DataTypes.STRING,
      allowNull: false,
    }},
    {
      timestamps: false,
    }  
  );

  return Empresas;
};
