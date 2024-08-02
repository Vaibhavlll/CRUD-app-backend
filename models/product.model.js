const mongoose = require('mongoose');
const Product = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "pls enter product name"],
        },
        quality: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            reuired: false,
            default: 0.
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        Timestamp: true,
    }
);

const Productlist = mongoose.model("Product",Product);
module.exports = Productlist;