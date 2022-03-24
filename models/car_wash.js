const Sequelize = require('sequelize');

module.exports = class Car_wash extends Sequelize.Model{
  
  static init(sequelize){
    
    return super.init({
      wash_no : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
      },
      customer : {
        type : Sequelize.STRING(200),
        allowNull : false,
      },
      car_no : {
        type : Sequelize.STRING(50),
        allowNull : false,
      },
      car_type1 : {
        type : Sequelize.STRING(45),
        allowNull : false,
      },
      car_type2 : {
        type : Sequelize.STRING(45),
        allowNull : false,
      },
      location : {
        type : Sequelize.STRING(200),
        allowNull : false,
      },
      created_at : {
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : sequelize.literal('CURRENT_TIMESTAMP'),
      },
      manager_no : {
        type : Sequelize.INTEGER,
        allowNull : false,
      },

    }, {
      sequelize,
      timestamps : false,
      underscored : false,
      modelName : 'Car_wash',
      tableName : 'car_washes',
      paranoid : false,
      charset : 'utf8mb4',
      collate : 'utf8mb4_general_ci',
    });

  }

  static associate(db){
    db.Car_wash.hasMany(db.Image, {foreignKey : 'wash_no', sourceKey : 'wash_no'});
  }

}