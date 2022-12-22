const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HR extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Adaptation, {
        foreignKey: 'hr_id',
      });
    }
  }
  HR.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'HR',
  });
  return HR;
};
