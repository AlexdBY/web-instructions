/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    instructionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'instructions',
        key: 'id'
      }
    },
    vote: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'likes'
  });
};
