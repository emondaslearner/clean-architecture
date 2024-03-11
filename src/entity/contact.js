class Contact {
  constructor({ id, name, email, phone, subject, comment }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.subject = subject;
    this.comment = comment;
  }
}

module.exports = Contact;
