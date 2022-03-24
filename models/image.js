const Sequelize = require('sequelize');

module.exports = class Image extends Sequelize.Model{
  
  static init(sequelize){
    
    return super.init({
      img_no : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
      },
      img_path : {
        type : Sequelize.STRING(200),
        allowNull : false,
      },
      img_name : {
        type : Sequelize.STRING(200),
        allowNull : false,
      },
      img_original : {
        type : Sequelize.STRING(200),
        allowNull : false,
      },
      created_at : {
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : sequelize.literal('CURRENT_TIMESTAMP'),
      },
      // wash_no : {
      //   type : Sequelize.INTEGER,
      //   allowNull : false,
      // },

    }, {
      sequelize,
      timestamps : false,
      underscored : false,
      modelName : 'Image',
      tableName : 'images',
      paranoid : false,
      charset : 'utf8',
      collate : 'utf8_general_ci',
    });

  }

  static associate(db){
    db.Image.belongsTo(db.Car_wash, {foreignKey : 'wash_no', targetKey : 'wash_no'});
  }

}