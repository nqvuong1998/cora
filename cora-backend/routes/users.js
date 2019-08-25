const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/:id',userController.getUserInfo)

module.exports = router;