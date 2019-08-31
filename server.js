const express = require('express');
const app = express();
const util = require('util')
const fs = require('fs')

// app.get("/", function (req, res) {
//     res.send("done")
// })

fs.watch('log/logger.log', (eventType, filename) => {
    if (eventType == 'change' && filename == 'logger.log') {
        console.log(eventType, filename)
    }
});


app.listen(3000, () => {
    console.log("Server is running on 3000")
})