const { Schema, model } = require('mongoose');

const {handleMongooseError} = require("../helpers");

const shopSchema = new Schema(
    {
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    drugslist: {
        type: Object,
        },
}, {versionKey: false, timestamps: true});

shopSchema.post("save", handleMongooseError);


const Shop = model('shop', postSchema);

module.exports = Shop;