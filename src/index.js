const express = require("express");
const dotEnv = require("dotenv");
const logRouter = require("./interfaces/routes/logRouter");
const runConsumer = require("./infrastructure/kafka/consumer");
dotEnv.config({ path: `./config.env` });
const mongoose = require("mongoose");
const app = express();
const DB = process.env.DATABASE_CONNECTION.replace(
  "<PASSWORD>",
  process.env.PASSWORD_DATABASE
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to database successfully😎");
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/v1/logs", logRouter);
runConsumer();
const port = process.env.PORT || 3000;
app.listen(port, "127.0.0.1", () => {
  console.log(`Server is listening on port:${port}`);
});
