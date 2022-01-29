const http = require("http");

http.createServer(function(req, res){
    if(req.method === "POST" && req.url === "/"){
        let dataSent = "";
        req.on("data", function(data){
            dataSent += data;
        })
        req.on("end", function(){
            console.log(dataSent)
            res.end(dataSent);
        })
    }
}).listen(4444, function(){
    console.log("listening")
});