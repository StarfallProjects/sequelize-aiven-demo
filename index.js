require('dotenv').config()
const { Sequelize, DataTypes, Op } = require('sequelize');

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
    if(Book.count !=0) {
        console.log("Database has rows already!")
        // Run examples
        getAllBooks();
        getAllRatch();
    } else {
        console.log("Adding some rows . . .");
        res.bulkCreate([
            {title: "Carpe Jugulum", authorName: "Terry Pratchett"},
            {title: "Hold Your Own", authorName: "Kae Tempest"},
            {title: "Neuromancer", authorName: "William Gibson"}
        ]);
        // Run examples
        getAllBooks();
        getAllRatch();
    }  
}
createBooksTable();

// List all books
async function getAllBooks() {
    const books = await Book.findAll();
    console.log("All books:", JSON.stringify(books, null, 2));
}

// List all books with an author name including the string 'ratch'
async function getAllRatch() {
    const books = await Book.findAll({
        where: {
            authorName: {
                [Op.like]: '%ratch%'
            }
        }
    });
    console.log("All books with an author name including 'ratch':", JSON.stringify(books, null, 2));
}



