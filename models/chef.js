module.exports = function(sequelize, DataTypes) {
const Chef = sequelize.define('Chef', {
  chef_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  }
});
Chef.associate = function(models) {
  Chef.hasMany(models.Burger, {
    onDelete: 'CASCADE'
  });
};
  return Chef;
};
