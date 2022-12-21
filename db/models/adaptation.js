const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Adaptation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.HR, {
        foreignKey: 'hr_id',
      });
    }
  }
  Adaptation.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    url: DataTypes.TEXT,
    progress: DataTypes.INTEGER,
    hr_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Adaptation',
  });
  return Adaptation;
};
