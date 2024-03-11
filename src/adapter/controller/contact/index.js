const services = require("../../services");

class Contact {
  async contact(req, res, next) {
    try {
      const { name, email, phone, subject, comment } = req.body;
      const data = await new services.Contact({
        name,
        email,
        phone,
        subject,
        comment,
      }).contact();

      res.status(201).json({
        code: 201,
        message:
          "Thank you for reaching out! Your message has been successfully sent. We'll get back to you as soon as possible.",
        data,
        self: req.url,
        links: {
          subscribe: "/subscribe",
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Contact;
