const mongoose = require("mongoose");
const logSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
logSchema.index({ userId: 1, timestamp: -1 });
const logUser = mongoose.model("logUser", logSchema);
module.exports = logUser;
