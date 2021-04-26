const Products = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING,
  }, { timestamps: false });

  return products;
};

module.exports = Products;
