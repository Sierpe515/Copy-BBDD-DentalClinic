'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees',
    [
      {id: 1, user_id: 5, specialty_id: 1, image: "http://localhost:3000/doc1a.png", collegiate_number: "num0001", schedule: "Mañana", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2, user_id: 6, specialty_id: 1, image: "http://localhost:3000/doc2a.png", collegiate_number: "num0002", schedule: "Mañana", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 3, user_id: 7, specialty_id: 1, image: "http://localhost:3000/doc3a.png", collegiate_number: "num0003", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 4, user_id: 8, specialty_id: 1, image: "http://localhost:3000/doc4a.png", collegiate_number: "num0004", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 5, user_id: 9, specialty_id: 1, image: "http://localhost:3000/doc5a.png", collegiate_number: "num0005", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
 ],
  {});
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
