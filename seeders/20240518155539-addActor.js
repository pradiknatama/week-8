'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // seeder untuk menambahkan actor (soal no1 ) 
     await queryInterface.bulkInsert('Actors', [
      {
        first_name: 'John',
        last_name: 'Doe',
        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        first_name: 'alfian',
        last_name: 'pradiknatama',
        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        first_name: 'alfian',
        last_name: 'tama',
        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        first_name: 'pradikna',
        last_name: 'tama',
        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        first_name: 'talitha',
        last_name: 'binar',
        createdAt:new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
