require('dotenv').config()
const { Sequelize } = require('sequelize');

// Create the connection by passing a connection URI
const sequelize = new Sequelize(process.env.AIVEN_MYSQL_URI)




