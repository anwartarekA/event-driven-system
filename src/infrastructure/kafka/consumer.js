const { Kafka } = require("kafkajs");
const logUser = require("./../../domain/models/log");
const kafka = new Kafka({
  clientId: "log-activity-consumer",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "log-services-activity" });
const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "log_user", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const data = JSON.parse(message.value);
        await logUser.create(data);
        console.log("created log in database successfully 😎");
      } catch (err) {
        console.log(err);
      }
    },
  });
};
module.exports = runConsumer;
