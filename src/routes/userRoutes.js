const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
router.route('/search/:name').get(userController.getUserDetails)
// router.route('/authenticate').post(userController.authenticate)

module.exports = router;