'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services',
    [
     {id: 1, treatment: "Implantology", description:"Implantology is the branch of dentistry that deals with the permanent implantation of artificial teeth in the jaw. Dental implants are provided using the following general process when it is determined that a natural tooth must be removed.", price: 150, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 2, treatment: "Bruxism", description:"Bruxism is a problem in which you unconsciously grind or clench your teeth. You may clench and grind your teeth during the day. Or, at night while you sleep (sleep bruxism). You may not even realize you have it.", price: 250, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 3, treatment: "Orthodontics", description:"Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth. You might need to see an orthodontist if you have crooked, overlapped, twisted or gapped teeth.", price: 1200, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 4, treatment: "Whitening", description:"Processes that aim to make someone’s natural teeth appear brighter and whiter. Teeth whitening methods include sanding down stains, bleaching, ultraviolet (UV) light therapy, and more.", price: 130, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 5, treatment: "Periodontics", description:"Periodontics is the branch of dentistry that focuses on the health of your gums and jawbone — the tissues that support your teeth. A gum specialist is called a periodontist.", price: 50, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 6, treatment: "Others", description:"Any other treatment that is not included in the previous treatments.", price: 50, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   
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
