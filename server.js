const express = require('express');
const app = express();
app.use(express.json());
const logger = require('./log/logger')

const fs = require('fs')
const path = require('path')


app.use(express.static(path.join(__dirname, ".")));

// app.get("/", function (req, res) {
//     res.send("done")
// })

app.get("/getLogs", function (req, res) {
    logger.getFileData(function (status, data) {
        res.status(status.code).send({ data: data, message: status.message })
    })
})


fs.watchFile('log/logger.log', (curr, prev) => {
    logger.getFileData(function (status, data) {

    })
});


app.listen(3000, () => {
    console.log("Server is running on 3000")
})