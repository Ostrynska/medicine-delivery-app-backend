const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

router.post('/', ctrl.listOrders)

router.get('/:id', isValidId, ctrl.getOrderById)

module.exports = router;
