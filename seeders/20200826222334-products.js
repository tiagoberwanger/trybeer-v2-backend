require('dotenv').config();

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('products',
      [{
        id: '1', name: 'Skol Lata 250ml', price: 2.20, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Skol Lata 350ml.jpg`,
      }, {
        id: '2', name: 'Heineken 600ml', price: 7.50, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Heineken 600ml.jpg`,
      }, {
        id: '3', name: 'Antarctica Pilsen 300ml', price: 2.49, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Antarctica Pilsen 300ml.jpg`,
      }, {
        id: '4', name: 'Brahma 600ml', price: 7.50, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Brahma 600ml.jpg`,
      }, {
        id: '5', name: 'Skol 269ml', price: 2.19, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Skol 269ml.jpg`,
      }, {
        id: '6', name: 'Skol Beats Senses 313ml', price: 4.49, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Skol Beats Senses 313ml.jpg`,
      }, {
        id: '7', name: 'Becks 330ml', price: 4.99, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Becks 330ml.jpg`,
      }, {
        id: '8', name: 'Brahma Duplo Malte 350ml', price: 2.79, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Brahma Duplo Malte 350ml.jpg`,
      }, {
        id: '9', name: 'Becks 600ml', price: 8.89, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Becks 600ml.jpg`,
      }, {
        id: '10', name: 'Skol Beats Senses 269ml', price: 3.57, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Skol Beats Senses 269ml.jpg`,
      }, {
        id: '11', name: 'Stella Artois 275ml', price: 3.49, urlImage: `https://tiagoberwanger-back.herokuapp.com/images/Stella Artois 275ml.jpg`,
      },
      ], {});
  },

  
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};