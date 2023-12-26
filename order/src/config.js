require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://127.0.0.1:27017/orders-db',
    rabbitMQURI: process.env.RABBITMQ_URI || "amqp://localhost:15672",
    rabbitMQQueue: 'orders',
    port: 3002
};
  