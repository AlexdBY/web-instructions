/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instructionstags', {
    instructionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'instructions',
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    tableName: 'instructionstags'
  });
};
