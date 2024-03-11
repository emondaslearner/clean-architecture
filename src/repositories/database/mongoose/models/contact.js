const { Schema, model } = require("mongoose");

const contact = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  }
);

const contactModel = model("Contact", contact);

module.exports = contactModel;
