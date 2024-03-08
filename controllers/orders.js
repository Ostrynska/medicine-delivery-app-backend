const Order = require('../models/order');
const { HttpError, ctrlWrapper } = require("../helpers");

const listOrders = async (req, res) => {
    const result = await Order.save(req.body, "-createdAt -updatedAt");
    res.json(result);
}

module.exports = {
    listOrders: ctrlWrapper(listOrders),
}


