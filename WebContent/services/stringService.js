/**
 * Created by Aditya on 10/8/2016.
 */

myApp.factory("stringService", function () {
    return {
        processString: function (input) {
            var outputText = "";
            if (!input) {
                return input;
            }
            for (var i = 0; i < input.length; i++) {
                if (i !== 0 && input[i] === input[i].toUpperCase()) {
                    outputText = outputText + " ";
                }
                outputText = outputText + input[i];
            }
            return outputText;
        }
    }
});
