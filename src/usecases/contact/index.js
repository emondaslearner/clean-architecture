const { Contact: ContactEntity } = require("../../entity");

class Contact {
  constructor(database, error, emailService) {
    this.database = database;
    this.emailService = emailService;
    this.error = error;
  }

  async contact(details) {
    const { name, email, phone, subject, comment } = details;
    Object.entries(details).forEach(([key, value]) => {
      if (!value) {
        throw this.error.badRequest(`${key}:${key} is missing`);
      }
    });

    const entityData = new ContactEntity({
      name,
      email,
      phone,
      subject,
      comment,
    });
    const data = await this.database.save(entityData);

    return data;
  }
}

module.exports = Contact;
