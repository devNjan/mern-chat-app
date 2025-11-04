const mongoose = require("Mongoose");

const MessageSchema = new mongoose.schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      trpe: String,
    },
    text: {
      Type: String,
    },
  },
  { Timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
