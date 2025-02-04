const express = require("express");
const router = express.Router();
const upload = require('../Utils/MulterConfig')
const {verifyAdmin, verifyUser} = require('../MiddleWare/authMiddleWare')
const {
  getAllProduct,
  singleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../Controller/Auth/productController");

router.post('/new_Product',verifyUser, verifyAdmin, upload.single("image"), createProduct);
router.get('/allProduct', getAllProduct)
router.get('/singleProduct/:id', singleProduct)
router.put('/updateProduct/:id',verifyUser, verifyAdmin, updateProduct)
router.delete('/deleteProduct/:id',verifyUser, verifyAdmin, deleteProduct)

module.exports = router

