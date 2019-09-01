myApp
    .controller("Controller", function ($scope, Service) {
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


        var socket = io.connect('http://localhost:3000');
        socket.on('logs_updating', function (data) {
            $scope.$apply(function () {
                if (data.data[0]) {
                    $scope.logAvailable = true;
                    $scope.logs = data.data;
                }
                else {
                    $scope.logs = [];
                    $scope.message = 'Logs not available';
                    $scope.logAvailable = false;
                }
            });
        });
    })