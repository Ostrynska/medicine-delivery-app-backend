const { Schema, model } = require('mongoose');

const {handleMongooseError} = require("../helpers");

const postSchema = new Schema(
    {
    id: {
        type: String,
    },
    data: {
        type: String,
    },
    photoFull: {
        type: String,
    },
    photoPreview: {
        type: String,
        },
    title: {
        type: String,
        },
    preview: {
        type: String,
        },
    content: {
        type: Object,
        },
}, {versionKey: false, timestamps: true});

postSchema.post("save", handleMongooseError);


const Post = model('post', postSchema);

module.exports = Post;