const Order = require('../models/order');
const { HttpError, ctrlWrapper } = require("../helpers");

const listOrders = async (req, res) => {
    const result = await Order.create(req.body, "-createdAt -updatedAt");
    res.json(result);
}

module.exports = {
    listOrders: ctrlWrapper(listOrders),
}
