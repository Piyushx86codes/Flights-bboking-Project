// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.addConstraint('Airports',{
//       type:'FOREIGN KEY',
//       name:'city_fkey_constraint',
//       // options.feilds:['cityId'],
//       options.fields:['cityid'],
//       refenrences:{
//         table:'Cities',
//         feild:'id'
//       },
//       onUpdate:'CASCADE',
//       onDelete:'CASCADE'
//     })
//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.removeConstraint('Airports','city_fkey_constraint')
//   }
// };


'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      type: 'foreign key',
      name: 'city_fkey_constraint',
      fields: ['cityId'], 
      references: {
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
  }
};