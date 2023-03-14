'use strict';
const bcrypt = require('bcrypt');

const password = "ClaveFalsa1"
const encryptedPassword = bcrypt.hashSync(password,10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
     {id: 1, name: "Fernando", surname:"Martínez Pardo", nif: "53252013K", birth_date: "1984-08-05", direction: "Calle Falsa 123", email:"fernando@fernando.com", phone: "666555444", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 2, name: "Helena", surname:"Calomarde Murgui", nif: "292161186E", birth_date: "1991-01-25", direction: "Calle Falsa 123", email:"helena@helena.com", phone: "666555333", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 3, name: "Pablo", surname:"Martínez Pardo", nif: "53252014E", birth_date: "1987-04-05", direction: "Calle Gotemburg 23", email:"pablo@pablo.com", phone: "666555222", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 4, name: "Felipe", surname:"Báguena Peña", nif: "22591528P", birth_date: "1987-08-21", direction: "Calle La Pantera 12", email:"felipe@felipe.com", phone: "666555111", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 5, name: "Zoiberg", surname:"", nif: "50200100L", birth_date: "1960-05-05", direction: "", email:"zoiberg@zoiberg.com", phone: "", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 6, name: "Strange", surname:"", nif: "50200200S", birth_date: "1980-07-06", direction: "", email:"strange@strange.com", phone: "", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 5, name: "Robotnik", surname:"", nif: "50200100L", birth_date: "1962-04-13", direction: "", email:"robotnik@robotnik.com", phone: "", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 6, name: "Black Death", surname:"", nif: "50200300S", birth_date: "1350-11-11", direction: "", email:"blackdeath@blackdeath.com", phone: "", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 6, name: "Rick", surname:"Sanchez", nif: "50200400S", birth_date: "1950-12-12", direction: "", email:"rick@rick.com", phone: "", password: encryptedPassword, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   
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
