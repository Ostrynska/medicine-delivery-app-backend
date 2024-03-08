const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');

const { Order } = require('../../models/order');

router.get('/', ctrl.listOrders)
router.post('/', ctrl.listOrders)

module.exports = router;
