const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

router.get('/orders', ctrl.listOrders)

router.get('/orders/:id', isValidId, ctrl.getOrderById)

module.exports = router;
