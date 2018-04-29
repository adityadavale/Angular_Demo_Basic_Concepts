/**
 * Created by Aditya on 5/20/2017.
 */
myApp.directive("myDirective", function () {

    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["myDirective"]] || scope.emp ||scope.employeeScope;
        },
        restrict: "A",
        scope:{employeeScope:"@abc"},
        templateUrl: "templateDirective.html"
    }

});