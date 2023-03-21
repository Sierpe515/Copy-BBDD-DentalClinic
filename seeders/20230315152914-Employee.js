'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees',
    [
      {id: 1, user_id: 5, specialty_id: 1, image: "http://localhost:3000/doc1a.png", description: "Dr. John A. Zoidberg is a Decapodian, a crustacean-like species of alien, who works as the staff doctor for Planet Express, despite his woeful understanding of human physiology and allusions to his questionable credentials.", collegiate_number: "num0001", schedule: "Mañana", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2, user_id: 6, specialty_id: 2, image: "http://localhost:3000/doc2a.png", description: "Doctor Strange serves as Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.", collegiate_number: "num0002", schedule: "Mañana", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 3, user_id: 7, specialty_id: 3, image: "http://localhost:3000/doc3a.png", description: "Doctor Ivo 'Eggman' Robotnik is a dastardly mad scientist who plans to conquer the world to build his own empire.", collegiate_number: "num0003", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 4, user_id: 8, specialty_id: 4, image: "http://localhost:3000/doc4a.png", description: "A plague doctor was a type of doctor who would treat victims of the bubonic plague, also known as the Black Death, during the second major outbreak of the disease across Western Europe.", collegiate_number: "num0004", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 5, user_id: 9, specialty_id: 5, image: "http://localhost:3000/doc5a.png", description: "Rick Sanchez of Dimension C-137 is a megagenius scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for his 'daughter's' family, as well as the safety of their son, Morty.", collegiate_number: "num0005", schedule: "Tarde", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
