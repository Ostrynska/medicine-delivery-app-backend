const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

const { Order } = require('../../models/order');

router.get('/', ctrl.listOrders)
router.post('/', validateBody(Order), ctrl.listOrders)

module.exports = router;
