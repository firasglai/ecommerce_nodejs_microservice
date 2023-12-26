require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGODB_PRODUCT_URI || "mongodb://127.0.0.1:27019/auth-db",
  rabbitMQURI: process.env.RABBITMQ_URI || "amqp://localhost:15672",
  exchangeName: "products",
  queueName: "products_queue",
};
