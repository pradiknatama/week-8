'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FilmCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // FilmCategory.belongsTo(models.Film,{foreignKey:film_id});
      // FilmCategory.belongsTo(models.Category,{foreignKey:category_id});
      // FilmCategory.belongsTo(models.Film, {foreignKey: "film_id"});
      FilmCategory.belongsTo(models.Category, {foreignKey: "category_id"});


    }
  }
  FilmCategory.init({
    film_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FilmCategory',
  });
  return FilmCategory;
};