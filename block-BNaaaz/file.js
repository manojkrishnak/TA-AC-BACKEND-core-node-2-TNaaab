const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/") {
      let content = fs.createReadStream("./readme.txt", { encoding: "utf8" });
      content.on("data", function (chunk) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(chunk);
      });
    }
  })
  .listen(4444);
