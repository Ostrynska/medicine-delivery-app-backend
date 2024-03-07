const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

router.get('/', ctrl.listOrders)

router.get('/:id', isValidId, ctrl.getShopById)

module.exports = router;
