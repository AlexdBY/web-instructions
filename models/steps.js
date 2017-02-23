/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('steps', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stepNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    instructionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'instructions',
        key: 'id'
      }
    }
  }, {
    tableName: 'steps',
    timestamps: false
  });
};
