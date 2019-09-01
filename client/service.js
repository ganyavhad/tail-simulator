myApp.factory('Service', function ($http) {

    return {
        getLogs: function (callback) {
            $http.get("http://localhost:3000/getlogs").then(function (data) {
                callback(data);
            }).catch(
                function (err) {
                    callback(err)
                });
        }
    }
});