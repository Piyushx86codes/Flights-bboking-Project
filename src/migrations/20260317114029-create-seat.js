'use strict';
/** @type {import('sequelize-cli').Migration} */
const {SEAT_TYPE} = require("../utils/common/enums");
const {BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS} = SEAT_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Airplanes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      type: {
        type: Sequelize.ENUM,
        values:[BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
        defaultValue:ECONOMY,
        allowNull:false,
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
    await queryInterface.dropTable('Seats');
  }
};