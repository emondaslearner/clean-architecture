const database = require("../../repositories/database/mongoose/Implementation");
const model = require("../../repositories/database/mongoose/models/contact");
const usecase = require("../../usecases");
const error = require("../../utils/error");

class Contact {
  constructor({ name, email, phone, subject, comment }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.subject = subject;
    this.comment = comment;
  }

  async contact() {
    const contactDatabase = new database(model);
    return await new usecase.Contact(contactDatabase, error).contact({
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      comment: this.comment,
    });
  }
}

module.exports = Contact;
