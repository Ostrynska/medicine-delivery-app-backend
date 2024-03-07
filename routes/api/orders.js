const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

router.get('/', ctrl.listOrders)
router.post('/', ctrl.listOrders)

module.exports = router;
