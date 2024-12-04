const express = require("express");
const router = express.Router();
const {verifyAdmin, verifyUser} = require('../MiddleWare/authMiddleWare')
const {
  getAllProduct,
  singleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../Controller/Auth/productController");

router.post('/new_Product',verifyUser, verifyAdmin, createProduct);
router.get('/allProduct', getAllProduct)
router.get('/singleProduct/:id', singleProduct)
router.put('/updateProduct/:id',verifyUser, verifyAdmin, updateProduct)
router.delete('/deleteProduct/:id',verifyUser, verifyAdmin, deleteProduct)

module.exports = router

