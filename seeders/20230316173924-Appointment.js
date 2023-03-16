'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments',
    [
      {id: 1, user_id: 4, service_id: 1, date: "2023-03-29", hour: "09:00", employee_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2, user_id: 4, service_id: 2, date: "2023-03-30", hour: "09:30", employee_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 3, user_id: 4, service_id: 3, date: "2023-03-31", hour: "10:00", employee_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 4, user_id: 4, service_id: 4, date: "2023-04-03", hour: "15:00", employee_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 5, user_id: 4, service_id: 5, date: "2023-04-04", hour: "16:00", employee_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 6, user_id: 4, service_id: 6, date: "2023-04-05", hour: "17:30", employee_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
