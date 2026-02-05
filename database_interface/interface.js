const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Stuart@2025",
    database: "vibes_database"
})

connection.connect((err) => {
    if(err){
        console.log("Error: ", err)
    }

    console.log("Successfully connected to the database");
})