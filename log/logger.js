const cp = require('child_process');
var logger = {
    // with tail command
    getFileData: async (callback) => {
        cp.exec('tail -n 10 log/logger.log', function (err, stdout, stderr) {
            if (stderr || !err) {
                callback({ code: 204, message: stderr }, stderr)
            } else if (stdout) {
                var logArray = stdout.toString().split("\n");
                callback({ code: 200, message: 'Log file fetched successfully' }, logArray)
            }
            else {
                callback({ code: 500, message: err }, err)
            }
        });
        // var result = await logger.getFIle();
        // res.send(result)
    },
    getFIle: () => {
        cp.exec('tail -n 10 log/logger.log', function (err, stdout, stderr) {
            if (stderr) {
                return stderr;
            } else if (stdout) {
                var logArray = stdout.toString().split("\n");
                return logArray;
            }
            else {
                return err;
            }
        });
    }
}
module.exports = logger;