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
            default: "No description given.",
        },
        long_desc: {
            type: String,
            default: "No description given.",
        },
        details: {
            type: String,
            default: "No details given.",
        },
        img: {
            type: String,
            default: "/img/default.svg",
        },
        discount: {
            type: Number,
            default: null,
        }
    }
);

module.exports = mongoose.model("Product", productSchema);
