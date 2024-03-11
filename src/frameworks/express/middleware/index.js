const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("../routers");

const middleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(router);
  app.use((err, _req, res, _next) => {
    console.log("error", err.message);
    if (err.status === 400) {
      const error = err.message.split(":");
      res.status(err.status || 500).json({
        code: err.status,
        error: "Bad Request",
        data: {
          field: error[0],
          message: error[1],
        },
      });
    }
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });
};

module.exports = middleware;
