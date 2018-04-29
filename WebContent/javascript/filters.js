/**
 * Created by Aditya on 10/2/2016.
 */
/* global myApp */
myApp.filter("roundValueFilter", function () {
    return function (input) {
        if (input !== undefined && isNaN(input) !== true) {
            input = input - 90;
            return input;

        }
    };
});