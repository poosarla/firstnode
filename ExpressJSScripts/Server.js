var express = require('express');
var fs = require('fs');
var path = require('path');

var NodeApp = express();

NodeApp.set("view engine", "ejs");

NodeApp.get("/", (request, response) => {
    // debugger;
    var readStream = fs.createReadStream(__dirname + "/../index.html", 'utf8');

    readStream.pipe(response);
});

NodeApp.get("/profile/:id", (request, response) => {
    // debugger;
    //response.send("I GOt your Request with Profile ID :" + request.params.id);
    // response.sendFile(path.resolve(__dirname + "/../index.html"));
    response.render('profile', { personDetails: request.params.id });

});

NodeApp.listen(3000);

