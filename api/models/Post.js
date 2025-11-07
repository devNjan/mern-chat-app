const mongoose = require("mongoose");

const PostSchema = new mongoose.schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      typr: String,
      max: 50,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.modes("Post", PostSchema);
