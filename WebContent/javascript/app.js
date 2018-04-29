/* global angular */
"use strict";
var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope,$http,stringService) {

    var country = {
        name: "India",
        flag: "images/IndiaFlag.png"
    };
    $scope.country = country;

    var emp = [
        {name: "Aditya", gender: "Male", dob: new Date("September 2,2016"), salary: "5000.457"},
        {name: "Anup", gender: "Male", dob: new Date("September 23,2016"), salary: "12300.7"},
        {name: "Komal", gender: "female", dob: new Date("October 4,2016"), salary: "999900.89"},
        {name: "Swapnil", gender: "Male", dob: new Date("October 14,2016"), salary: "9900.89"},
        {name: "Ketan", gender: "Male", dob: new Date("October 2,2016"), salary: "998940.89"}
    ];

    $scope.emp = emp;
    $scope.name = "Aditya";
    $scope.sortColumn = "name";
    $scope.rowsLimit = 4;
    $scope.reverseSort = false;


    $scope.sortData = function (sortColumn) {
        $scope.reverseSort = !$scope.reverseSort;
        $scope.sortColumn = sortColumn;
    };


    //JSON Fetching Code:

    var successCallBack = function (response) {
        $scope.employeeData = response.data.emp;
    };

    var failureCallBack = function (response) {
        $scope.error = response.data;
    };

    $http({
        method: "GET",
        url: "/Aditya_AngularDemo/WebContent/Jsons/employeeList.json"
    })
        .then(successCallBack, failureCallBack);

    //XML Fetching Code:

    var successCallBackXml = function (response) {
        $scope.bookData = response.data;
    };

    var failureCallBackXml = function (response) {
        $scope.error = response.data;
    };

    $http({
        method: "GET",
        Accept : "application/xml",
        url: "/Aditya_AngularDemo/WebContent/Xmls/data.xml"
    })
        .then(successCallBackXml, failureCallBackXml);

    //Service Code

    $scope.processString = function (input) {
        $scope.outputText = stringService.processString(input);
    };




});