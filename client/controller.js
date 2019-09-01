myApp
    .controller("Controller", function ($scope, Service) {
        console.log("controller called");
        $scope.logs = [];
        $scope.logAvailable = false;
        $scope.message = 'Loading';
        Service.getLogs(function (data) {
            if (data.status == 200) {
                $scope.logAvailable = true;
                $scope.logs = data.data.data;
            } else if (data.status == 204) {
                $scope.message = 'Logs not available';
                $scope.logAvailable = false;
            } else {
                $scope.message = 'Internal server error';
                $scope.logAvailable = false;
            }
        })
    })