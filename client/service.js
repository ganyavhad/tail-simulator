myApp.factory('Service', function ($http) {

    return {
        getLogs: function (callback) {
            $http.get("http://localhost:3000/getlogs").then(function (data) {
                console.log(data)
                data = data.data;
                callback(data);
            }).catch(
                function (err) {
                    console.log(err)
                    callback(err);
                });
        },
    }
});