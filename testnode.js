const fs = require('fs');

console.log('Node is installed baby!');



var map = new Map();
map.set(2, "dfsdg");
map.set(1, "er");
map.set(1, "dgd0");


map.forEach((x, y) => console.log(x, y));
var set = new Set();
set.add();


var time = 0;
var cleartime = setInterval(arg => {
    time += 2;
    console.log(`${time} sec in delay`); 
    if (time > 9) {

        clearInterval(cleartime);
    }

}, 3000);


console.log(__dirname);
console.log(__filename);

// fs.writeFile("writetext.txt", "hello", function (err) {

//     fs.readFile("writetext.txt", 'utf8', function (err, content) {

//         console.log(content);

//     });


// });

fs.mkdir("testfolder", function () {

    fs.readFile("writetext.txt", "utf8", function (err, content) {
        fs.writeFileSync("./testfolder/newtextfile.txt", content);
        // fs.rmdir("testfolder");

    });

});


//fs.unlink("writetext.txt");