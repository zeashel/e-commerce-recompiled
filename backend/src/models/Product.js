const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
        },
        img: {
            type: String,
        },
        discount: {
            type: Number,
            default: null,
        }
    }
);

module.exports = mongoose.model("Product", productSchema);
