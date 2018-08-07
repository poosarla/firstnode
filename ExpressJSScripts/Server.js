var express = require('express');
var fs = require('fs');

var NodeApp = express();

NodeApp.get("/", (request, response) => {
    // debugger;
    var readStream = fs.createReadStream("../index.html", 'utf8');

    readStream.pipe(response);
});

NodeApp.get("/profile/:id", (request, response) => {

    response.send("I GOt your Request with Profile ID :" + request.params.id);

});

NodeApp.listen(3000);

