const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// define category routes

// get all categories
router.get('/categories', categoryController.getCategories);

module.exports = router;