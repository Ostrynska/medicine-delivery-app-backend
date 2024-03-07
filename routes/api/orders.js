const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/order');


router.get('/', ctrl.listOrders)
router.post('/', validateBody(schemas.addSchema), ctrl.listOrders)

module.exports = router;
