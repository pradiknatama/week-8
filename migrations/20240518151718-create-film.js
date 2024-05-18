'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      release_year: {
        allowNull: false,
        type: Sequelize.DATE
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      rental_duration: {
        type: Sequelize.INTEGER
      },
      rental_rate: {
        type: Sequelize.INTEGER
      },
      length: {
        type: Sequelize.INTEGER
      },
      replacement_cost: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      special_features: {
        type: Sequelize.STRING
      },
      fulltext: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};