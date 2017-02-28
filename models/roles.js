/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return Role = sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      tableName: 'roles',
      timestamps: false
    });
};
