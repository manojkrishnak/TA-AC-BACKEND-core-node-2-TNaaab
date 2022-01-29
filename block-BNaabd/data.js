const http = require("http");

http.createServer((req, res) => {
    console.log(req.headers)
    req.on("data", data => {
        
    })
    if(req.method === "POST" && req.url === "/json"){
        res.end(req);
    }else if(req.method === "POST" && req.url === "/form"){
        res.end(req);
    }else{
        res.end("No rouet found")
    }
}).listen(4444)