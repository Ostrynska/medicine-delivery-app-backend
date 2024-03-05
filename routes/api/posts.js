const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/posts');
const { validateBody, isValidId } = require('../../middlewares');

router.get('/', ctrl.listPosts)

router.get('/:id', isValidId, ctrl.getPostById)

module.exports = router;
