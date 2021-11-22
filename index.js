const { Sequelize } = require('sequelize');

// Create the connection by passing a connection URI
const sequelize = new Sequelize('mysql://avnadmin:zVGKCxmjGYtWEaZd@aiven-interview-starfallprojects-eb1d.aivencloud.com:16574/defaultdb?ssl-mode=REQUIRED')

// Verify the connection works
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });