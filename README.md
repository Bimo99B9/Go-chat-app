# DS Gochat App

DS Gochat App is a real-time chat application built using Golang, ReactJS, and Redis. This project demonstrates how to use Golang for the backend, ReactJS for the frontend, and Redis as the database for efficient and fast communication between users.

## Prerequisites

Before starting the development work, make sure you have already installed the following prerequisites:

1. Golang Compiler v1.17 or above (recommended v1.17.11). You can download it [here](https://golang.org/dl/).
2. Nodejs v16.13 or above (recommended v16.13.2). It is required for ReactJS. You can download it [here](https://nodejs.org/en/download/).
3. Install Redis CLI (recommended v7.0.4). You can download it [here](https://redis.io/download).
4. Create a Redis Cloud Account [here](https://redislabs.com/try-free/). Redis Cloud is a cloud service provided by Redis. Create a free account, no credit card is required. By default, all the modules like RedisJSON and Redisearch are available in Redis Cloud. We will use redis-cli to connect to Redis Cloud.

## Getting Started

Follow the steps below to set up and run the DS Gochat App:

### Backend

1. Clone the repository and navigate to the project folder.
2. Open the `.env` file and fill in your Redis Cloud credentials (REDIS_HOST, REDIS_PORT, and REDIS_PASSWORD).

To start the HTTP server, run the following command:

```sh
go run main.go --server=http
```

To start the WebSocket server, run the following command:

```sh
go run main.go --server=websocket
```

### Frontend
1. Navigate to the client folder.
2. Run the following command to install all the dependencies:

```sh
npm install
```

3. Run the following command to start the ReactJS application:

```sh
npm start
```

The ReactJS application should now be running on `http://localhost:3000`.
