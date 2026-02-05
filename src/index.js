const mysql = require("mysql2/promise")
const http = require("http")
const { URL } = require("url")

const port = 8020

const server = http.createServer(async (req, res) => {

    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = fullUrl.searchParams;

    switch(fullUrl.pathname){

        case "/welcome": 
            res.end("<p>Welcome to the world of vibes</p>")
            break;
        
        case "/authenticate":
            let data = "";
            let inter_m;
            let final = {};

            req.on("data", blob => 
                data += blob
            );

            req.on("end", () => {

                inter_m = data.split("&")
                inter_m.forEach((value) => {
                    const inter_value = value.split("=")
                    final[inter_value[0]] = inter_value[1]
                })
                res.end(`User data: ${JSON.stringify(final)}`)
            })
            
            break;

        default:
            res.end("<div style='width: 100vw;height: 100vh;display: flex;align-items: center;justify-content: center'><p>404 page not found</p></div>")
    }

}).listen(port, (err) => {
    if(err){
        console.log(`There is an error with the server: ${err}`)
        return
    }

    console.log(`The server has started successfully at port ${port}`)

})

async function getDataFromPostRequest(request){
    let data = "";
    let inter_m;
    let final = {};

    request.on("data", blob => 
        data += blob
    );

    request.on("end", () => {
        console.log(data);

        inter_m = data.split("&")
        inter_m.forEach((value) => {
            const inter_value = value.split("=")
            final[inter_value[0]] = inter_value[1]
            console.log(inter_m)
        })

        return final
    })
}