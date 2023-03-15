'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Specialties',
    [
    {id: 1,type: "General Dentist",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 2,type: "Orthodontist",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 3,type: "Periodontist",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 4,type: "Dental Assistant",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 5,type: "Administrative",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
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
