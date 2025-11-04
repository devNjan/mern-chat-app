const mongoose = require("mongoose");

const ConversationSchema = new mongoose.model(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);
