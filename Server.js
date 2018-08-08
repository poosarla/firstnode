const http = require("http");
const fs = require("fs");

var server = http.createServer(function (request, response) {
    debugger;
    response.writeHead(200, { 'content-type': "text/html" });
    //var readStream = fs.createReadStream(__dirname + "/index.html");

    //sreadStream.pipe(response);
    //response.end("hi dude you at server");

    response.sendFile(__dirname + "/../index.html", 'utf8');

});
server.listen(3000, 'localhost');
console.log("listening to server 3000");