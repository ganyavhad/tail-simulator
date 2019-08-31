const express = require('express');
const app = express();
const util = require('util')
const fs = require('fs')
const cp = require('child_process');


// app.get("/", function (req, res) {
//     res.send("done")
// })

// var getFileData = function () {
//     fs.readFile('log/logger.log', function (err, data) {
//         if (err) throw err;
//         var array = data.toString().split("\n");
//         var newAraay = [];
//         console.log("array.length ", array.length)
//         if (array.length > 10) {
//             newAraay = array.splice(array.length - 10, array.length + 1)
//         } else {
//             newAraay = array;
//         }
//         newAraay.forEach(function (log) {
//             console.log(log)
//         })
//     });
// }

// with tail command
getFileData = function () {
    cp.exec('tail -n 5 ' + 'log/logger.log --lines 10', function (err, stdout, stderr) {
        console.log("1111")
        if (err) {
            console.log(err)
        }
        else {
            console.log(stdout)
        }
    });
}

fs.watchFile('log/logger.log', (curr, prev) => {
    getFileData()
});


app.listen(3000, () => {
    console.log("Server is running on 3000")
})