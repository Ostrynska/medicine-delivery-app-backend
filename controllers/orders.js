const Order = require('../models/order');
const { HttpError, ctrlWrapper } = require("../helpers");

const listOrders = async (req, res) => {
    try {
        delete req.body.createdAt;
        delete req.body.updatedAt;

        const result = await Order.create(req.body);
        res.json(result);
    } catch (error) {
        console.error('Error while creating order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    listOrders: ctrlWrapper(listOrders),
}


