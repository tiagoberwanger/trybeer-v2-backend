// const jwt = require('jsonwebtoken');
const { sales, salesProducts, products: productsModel } = require('../../models');

// const secret = 'T1f7C0e8E1p9I8h8M';
const STATUS_OK = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const createSale = async (req, res, _next) => {
  try { 
    // const token = req.headers.authorization;
    // const decoded = jwt.verify(token, secret);
    // const { id: userId } = decoded.data;
    const userId = req.user.id;
    const { products, total: totalPrice, deliveryAddress, deliveryNumber } = req.body;
    const { dataValues } = await sales
      .create({ userId, totalPrice, deliveryAddress, deliveryNumber });
    await Promise.all(products.map(async ({ id: productId, quantity }) => {
      await salesProducts.create({ saleId: dataValues.id, productId, quantity });
    }));
    res.status(STATUS_OK).json({ message: `Sale ${dataValues.id} created!` });
  } catch (error) {
    console.log(error);
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

const getAllSales = async (req, res, _next) => {
  const Sales = await sales.findAll();
  return res.status(STATUS_OK).json(Sales);
};

const getSaleById = async (req, res, _next) => {
  const { id } = req.params;
  const Sale = await sales.findOne({ where: { id }, 
    include: [{ model: productsModel, 
    as: 'products', 
    through: { attributes: { include: ['quantity'] } } }],
  });
  return res.status(STATUS_OK).json(Sale);
};

const changeSaleStatus = async (req, res, _next) => {
  const { id } = req.params;
  const { status } = req.body;
  await sales.update({ status }, { where: { id } });
  return res.status(STATUS_OK).json({ status });
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  changeSaleStatus,
};