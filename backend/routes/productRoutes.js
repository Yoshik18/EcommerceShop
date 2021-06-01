const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Products = require('../models/productModel');

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Products.find({});
		res.json(products);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Products.findById(req.params.id);
		res.json(product);
	})
);

module.exports = router;
