module.exports = function(sequelize, DataTypes) {
const Burger = sequelize.define('Burger', {
  burger_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});
Burger.associate = function(models) {
  Burger.belongsTo(models.Chef, {
    foreignKey: {
      allowNull: false
    }
  });
};
  return Burger;
};




// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1]
//     }
//   });
//   Post.associate = function(models) {
//       // Using additional options like CASCADE etc for demonstration
//       // Can also simply do Task.belongsTo(models.User);
//       Post.belongsTo(models.Author, {
//         onDelete: "CASCADE",
//         foreignKey: {
//           allowNull: false
//         }
//       });
    // }
