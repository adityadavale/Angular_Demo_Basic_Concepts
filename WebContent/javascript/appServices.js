/* global angular */
"use strict";
var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope, factoryService, serviceService) {
    $scope.value = factoryService.getValue("Aditya");
    $scope.value2 = factoryService.getValue("AdityaF");

    //$scope.value1 = serviceService.getValue("Aditya");

    //$scope.value3= new serviceService("Anup");

    $scope.value5=serviceService.subFunction1("NewAditya");
    //$scope.value4 = serviceService.getValue("Aditya");
});

myApp.controller("myCtrl1", function ($scope, factoryService, serviceService) {
    $scope.value = factoryService.getValue("Aditya1");
    //$scope.value1 = serviceService.getValue("Aditya1");

    //$scope.value2 = serviceService.getValue("Aditya1");
});