const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  }
);

const SubscribeModel = model("Subscriber", schema);

module.exports = SubscribeModel;
