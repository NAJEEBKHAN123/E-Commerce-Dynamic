const express = require("express");
const {
    addItemToCart, removeItemFromCart, clearCart, getUserCart ,
} = require("../Controller/CartController/cartController");
const router = express.Router();
const { verifyUser, verifyAdmin } = require("../MiddleWare/authMiddleWare");

router.post("/add", verifyUser, addItemToCart);
router.get('/:userId', getUserCart)
router.delete('/remove', removeItemFromCart)
router.delete('/remove/:userId',verifyUser, clearCart)

module.exports = router;
