const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        marque: {
            type: String,
            required: true,
        },
        prix: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
