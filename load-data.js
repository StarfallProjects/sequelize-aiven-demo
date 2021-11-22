require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');

// Create the connection by passing a connection URI
const sequelize = new Sequelize(process.env.AIVEN_MYSQL_URI)

// define the 'Book' model
const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Create the 'Books' table and add some data
async function createBooksTable() {
    let res = await Book.sync();
    console.log("Table created", res);
    res.bulkCreate([
        {title: "Carpe Jugulum", authorName: "Terry Pratchett"},
        {title: "Hold Your Own", authorName: "Kae Tempest"},
        {title: "Neuromancer", authorName: "William Gibson"}
    ])
    console.log("Data added");    
}
createBooksTable();

