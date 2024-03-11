const services = require("../../services");

class Subscribe {
  async subscribe(req, res, next) {
    try {
      const { email } = req.body;
      const classInit = new services.Subscribe({ email });
      const data = await classInit.subscribe();

      res.status(201).json({
        code: 201,
        message: "Successfully subscribed",
        data,
        self: req.url,
        links: {
          contact: "/contact",
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Subscribe;
