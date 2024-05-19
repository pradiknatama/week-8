'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Film.hasMany(models.FilmCategory,{foreignKey:film_id});
      Film.hasMany(models.FilmCategory, {foreignKey: "film_id"});

    }
  }
  Film.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    release_year: DataTypes.DATE,
    language_id: DataTypes.INTEGER,
    rental_duration: DataTypes.INTEGER,
    rental_rate: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    // replacement_cost: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    special_features: DataTypes.STRING,
    fulltext: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};