const { Schema, model } = require('mongoose');
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const drugSchema = new Schema({
    shop: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
});

const orderSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    drugslist: [drugSchema],
}, { timestamps: true });



orderSchema.post("save", handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;