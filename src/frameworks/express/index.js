const express = require("express");
const middleware = require("./middleware");

const app = express();
middleware(app);

module.exports = app;
