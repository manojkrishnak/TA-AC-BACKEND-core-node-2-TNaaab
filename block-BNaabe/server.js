const http = require("http");
const { parse } = require("querystring");

http.createServer((req, res) => {
    let content = "";
    req.on("data", data => {
        content += data;
    })
    req.on("end", () => {
        if(req.method === "POST" && req.url === "/"){
            console.log(content)
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(content);
        }
        if(req.method === "POST" && req.url === "/form"){
            const qsD = parse(content);
            // res.writeHead(201, {"Content-Type": "application/json"});
            res.end(qsD.captain);
        }
    })
}).listen(4444, () => console.log("listening"));