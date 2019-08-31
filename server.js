const express = require('express');
const app = express();
const util = require('util')
const fs = require('fs')


// app.get("/", function (req, res) {
//     res.send("done")
// })

var getFileData = function () {
    fs.readFile('log/logger.log', function (err, data) {
        if (err) throw err;
        var array = data.toString().split("\n");
        var newAraay = [];
        console.log("array.length ", array.length)
        if (array.length > 10) {
            newAraay = array.splice(array.length - 10, array.length + 1)
        } else {
            newAraay = array;
        }
        newAraay.forEach(function (log) {
            console.log(log)
        })
    });
}


fs.watch('log/logger.log', (eventType, filename) => {
    if (eventType == 'change' && filename == 'logger.log') {
        getFileData();
    }
});


app.listen(3000, () => {
    console.log("Server is running on 3000")
})