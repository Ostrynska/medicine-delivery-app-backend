const { Schema, model } = require('mongoose');
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const drugslistSchema = Schema({
    shop: { type: String, required: true },
  drugslist: {
    type: Schema.Types.ObjectId,
    ref: "shop",
    },
  totalPrice: { type: Number, required: true },
});

const orderShema = new Schema(
    {
    id: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone field is required'],
        },
    address: {
        type: String,
        required: [true, 'Address field is required'],
        },
    drugslist: [drugslistSchema]
    }, { versionKey: false, timestamps: true });

const addSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().required(),
    drugsList: Joi.required(),
    // favorite: Joi.boolean()
})

// const updateFavoriteSchema = Joi.object({
//     favorite: Joi.boolean().required(),
// })

const schemas = {
    addSchema,
    // updateFavoriteSchema,
}

orderShema.post("save", handleMongooseError);

const Order = model('order', orderShema);

module.exports = {Order, schemas};