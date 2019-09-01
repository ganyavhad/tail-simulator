var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("logs", {
        url: "/logs",
        templateUrl: "client/view/logs.html",
        controller: "Controller"
    });
    $urlRouterProvider.otherwise("/logs");
});
