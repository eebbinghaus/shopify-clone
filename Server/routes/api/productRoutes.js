const router = require("express").Router();
const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
} = require("../../controllers/productController");

router.route("/").get(getProducts).post(createProduct);

router.route("/:productId").put(updateProduct).delete(deleteProduct);

module.exports = router;
