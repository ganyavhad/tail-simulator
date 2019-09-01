const express = require('express');
const app = express();
const util = require('util')
const fs = require('fs')
const cp = require('child_process');
const path = require('path')

app.use(express.static(path.join(__dirname, ".")));

// app.get("/", function (req, res) {
//     res.send("done")
// })


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