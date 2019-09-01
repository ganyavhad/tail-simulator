myApp
    .controller("Controller", function ($scope, Service) {
        console.log("controller called");
        Service.getLogs(function (data) {
            console.log(data)
        })
    })