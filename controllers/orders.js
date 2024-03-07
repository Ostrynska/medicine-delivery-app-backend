const Order = require('../models/order');
const { HttpError, ctrlWrapper } = require("../helpers");

const listOrders = async (req, res) => {
    const result = await Order.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getOrderById = async (req, res) => {
    const {id} = req.params;
    const result = await Order.findById(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
}

module.exports = {
    listOrders: ctrlWrapper(listOrders),
    getOrderById: ctrlWrapper(getOrderById)
}