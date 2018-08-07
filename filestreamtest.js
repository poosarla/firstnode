// / <reference path="./node_modules/@types" />


var fs = require("fs");

var Readstreambuffer = fs.createReadStream(__dirname + "/stringtext.txt", 'utf8');
var WriteStreamBuffer = fs.createWriteStream(__dirname + "/writeString.txt");

Readstreambuffer.on("data", (chunk) => {

    console.log("new chunk received");
    // console.log(chunk);
    WriteStreamBuffer.write(chunk);

});