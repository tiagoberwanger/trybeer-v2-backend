const { products } = require('../../models');

const formatUrl = (url) => url.split(' ').join('%20');

const formatPrice = (price) => `R$ ${price.replace('.', ',')}`;

const getAll = async () => {
  const productsArray = await products.findAll();
  const formatedProducts = productsArray.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stringPrice: formatPrice(product.price),
      quantity: 0,
      urlImage: formatUrl(product.urlImage),
  }));

  return formatedProducts;
};

module.exports = {
  getAll,
};