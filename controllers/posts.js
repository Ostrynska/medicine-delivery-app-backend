const Post = require('../models/post');
const { HttpError, ctrlWrapper } = require("../helpers");

const listPosts = async (req, res) => {
    const result = await Post.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getPostById = async (req, res) => {
    const {id} = req.params;
    const result = await Post.findById(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
}

module.exports = {
    listPosts: ctrlWrapper(listPosts),
    getPostById: ctrlWrapper(getPostById)
}