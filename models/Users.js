const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'userId', as: 'user' });
  };

  return users;
};

module.exports = Users;
