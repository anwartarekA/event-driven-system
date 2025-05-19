const express = require("express");
const logRouter = express.Router();
const {
  createLog,
  getLogs,
} = require("./../../infrastructure/controllers/logController");
logRouter.route("/").get(getLogs).post(createLog);
module.exports = logRouter;
