const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "log-activity",
  brokers: ["kafka:9092"],
});
const producer = kafka.producer();

const sendLog = async (logData) => {
  await producer.connect();
  await producer.send({
    topic: "log_user",
    messages: [{ value: JSON.stringify(logData) }],
  });
  await producer.disconnect();
};

module.exports = sendLog;
