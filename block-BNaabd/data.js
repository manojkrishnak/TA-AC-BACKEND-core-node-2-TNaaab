const http = require("http");

http.createServer((req, res) => {
    console.log(req.headers)
    let store = "";
    req.on("data", data => {
        store += data;
    })
    req.on("end", () => {
        if(req.method === "POST" && req.url === "/json"){
            res.end(store);
        }else if(req.method === "POST" && req.url === "/form"){
            res.end(store);
        }else{
            res.end("No rouet found")
        }
    })
}).listen(4444)