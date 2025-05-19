const logUser = require("./../../domain/models/log");
const sendLog = require("./../kafka/producer");
exports.createLog = async (req, res, next) => {
  const data = req.body;
  await sendLog(data);
  res.status(200).json({
    status: "success",
    message: "send data successfully to kafka 😎",
    data,
  });
  next();
};
exports.getLogs = async (req, res, next) => {
  // filter
  const queryClone = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "select"];
  excludedFields.forEach((ele) => delete queryClone[ele]);
  let queryStr = JSON.stringify(queryClone);
  queryStr = queryStr.replace(/\blt|lte|gt|gte/gi, (match) => `$${match}`);
  let query = logUser.find(JSON.parse(queryStr));

  // pagination
  let page = req.query.page * 1 || 1;
  let limit = req.query.limit * 1 || 5;
  let skip = (page - 1) * limit;
  const logs = await query.find().skip(skip).limit(limit);
  res.status(200).json({
    status: "success",
    length: logs.length,
    data: { logs },
  });
};
