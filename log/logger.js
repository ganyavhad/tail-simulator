const cp = require('child_process');
var logger = {
    // with tail command
    getFileData: async (callback) => {
        cp.exec('tail -n 10 log/logger.log', function (err, stdout, stderr) {
            if (err && !stderr) {
                callback({ code: 500, message: 'Internal server error' }, err)
            }
            else if (stdout) {
                var logArray = stdout.toString().split("\n");
                callback({ code: 200, message: 'Log file fetched successfully' }, logArray)
            }
            else {
                callback({ code: 204, message: 'Logs not available' }, [])
            }
        });
    }
}
module.exports = logger;