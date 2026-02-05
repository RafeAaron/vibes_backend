const mysql = require("mysql2/promise")
const http = require("http")
const { URL } = require("url")

const port = 8020

const server = http.createServer((req, res) => {

    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = fullUrl.searchParams;

    res.end("<p>Welcome to the world of vibes</p>")

}).listen(port, (err) => {
    if(err){
        console.log(`There is an error with the server: ${err}`)
        return
    }

    console.log(`The server has started successfully at port ${port}`)

})