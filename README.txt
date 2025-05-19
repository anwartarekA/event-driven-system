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

Dockerfile
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
