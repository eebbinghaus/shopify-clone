const { Product } = require("../models");

module.exports = {
    //Get all products
    getProducts(req, res) {
        Product.find()
            .select("-__v")
            .then((products) => res.json(products))
            .catch((err) => res.status(500).json(err));
    },

    //Create a new product
    createProduct(req, res) {
        Product.create(req.body)
            .then((product) => res.status(200).json(product))
            .catch((err) => res.status(500).json(err));
    },

    //Update an existing product
    updateProduct(req, res) {
        Product.findOneAndUpdate(
            { _id: req.params.productId },
            { $set: req.body }
        )
            .select("-_v")
            .then((product) =>
                !product
                    ? res
                          .status(404)
                          .json({ message: "No product with this id!" })
                    : res.json(product)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Delete a product
    deleteProduct(req, res) {
        Product.findOneAndDelete({ _id: req.params.productId })
            .then((product) =>
                !product
                    ? res
                          .status(404)
                          .json({ message: "No product with that ID" })
                    : res.json({ message: "Product deleted!" })
            )
            .catch((err) => res.status(500).json(err));
    },
};
