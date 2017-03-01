/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stepId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'steps',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comments',
    timestamps: false
  });
};
