const { Schema, model } = require('mongoose');

const {handleMongooseError} = require("../helpers");

const orderShema = new Schema(
    {
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    drugslist: [
        {
            shop: {
                type: String
            },
            drug: {
                type: String,
            },
            price: {
                type: Number,
            },
            quantity: {
                type: Number,
            },
            totalPrice: {
                type: Number,
            },
        }
    ],
}, {versionKey: false, timestamps: true});

orderShema.post("save", handleMongooseError);

const Order = model('order', orderShema);

module.exports = Order;