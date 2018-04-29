/**
 * Created by Aditya on 10/8/2016.
 */

myApp.factory("factoryService", function () {

    var constantValue = 0;

    function getValue(name) {
        constantValue = constantValue + 1;
        console.log("Constant Value From factoryService: " + constantValue + " getValueFunction called with " + name);
        return constantValue;
    }

    return {
        getValue: getValue
    }
});
