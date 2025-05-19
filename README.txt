# 👻 Activity Logging Microservice

This is a scalable, event-driven microservice built with Node.js, Kafka, MongoDB, and Docker. It handles user activity logs in real time, stores them efficiently, and exposes a REST API to query logs with pagination and filtering.

---

## 🚀 Project Features

- 😎 Kafka Producer/Consumer to process user activity logs asynchronously
- 😎 MongoDB storage with proper indexing for performance
- 😎 REST API with pagination & filtering support
- 😎 Built using DDD (Domain-Driven Design) principles
- 😎 Dockerized and ready to deploy on Kubernetes
- 😎 Designed for scalability and real-time processing

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
