const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs')
const path = require('path')

app.use(express.static(path.join(__dirname, ".")))

const logger = require('./log/logger')

app.get("/getLogs", function (req, res) {
    logger.getFileData(function (status, data) {
        res.status(status.code).send({ data: data, message: status.message })
    })
})


fs.watchFile('log/logger.log', (curr, prev) => {
    logger.getFileData(function (status, data) {
        if (status.code == 200 || status.code == 204) {
            io.sockets.emit("logs_updating", { data: data })
        }
    })
});

setInterval(function () {
    console.log(new Date());
}, 10000)

// socket initialized
io.on("connection", function (socket) { })

server.listen(3000, () => {
    console.log("Server is running on 3000")
})
