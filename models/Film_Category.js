'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // FilmCategory.belongsTo(models.Film,{foreignKey:film_id});
      // FilmCategory.belongsTo(models.Category,{foreignKey:category_id});
      Film_Category.belongsTo(models.Film, {foreignKey: "film_id"});
      Film_Category.belongsTo(models.Category, {foreignKey: "category_id"});


    }
  }
  Film_Category.init({
    film_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Film_Category',
  });
  return Film_Category;
};