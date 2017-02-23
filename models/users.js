/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    socialId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'socials',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};
