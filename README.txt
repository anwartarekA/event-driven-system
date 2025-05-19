# 👻 Activity Logging Microservice

"This microservice is designed for scalability and real-time processing using Node.js, Kafka, MongoDB, and Docker. It captures user activity events, stores them efficiently, and provides a RESTful API to retrieve logs with support for pagination and filtering."
---

🚀 Key Features
⚙️ Asynchronous processing of user activity logs via Kafka Producer and Consumer

📦 Efficient data storage in MongoDB with optimized indexing for fast queries

🔍 RESTful API offering advanced log retrieval with built-in pagination and filtering

🧠 Structured using Domain-Driven Design (DDD) for maintainability and clear separation of concerns

🐳 Fully containerized with Docker, prepared for deployment on Kubernetes

📈 Engineered for scalability and real-time event handling

---

## 📁 Project Structure (Based on DDD)


---

## 🛠️ Tech Stack

- Node.js
- Apache Kafka
- MongoDB
- Express.js
- Docker
- Kubernetes
- Domain-Driven Design (DDD)

---

## 🐳 Docker Instructions

### 1. Build Docker Image

```bash
docker build -t activity-service .

💀 Dockerfile
# Use official Node.js LTS image as base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY . .

# Expose the port your app listens on (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "src/index.js"]


🤡 docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
      - kafka
    environment:
      - MONGO_URL=mongodb+srv://anwartarek719:AnwarTarek123@cluster0.qinpghc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      - KAFKA_BROKER=kafka:9092
      - PORT=3000
    env_file:
      - ./config.env
  mongo:
    image: mongo:6
    ports:
      - "3000:3000"
    volumes:
      - mongo-data:/data/db

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    depends_on:
      - zookeeper

volumes:
  mongo-data:
