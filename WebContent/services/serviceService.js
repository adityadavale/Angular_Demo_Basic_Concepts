/**
 * Created by Aditya on 10/8/2016.
 */

myApp.service("serviceService", function () {
    this.constantValue = 0;

    var getValue=function(name) {
        this.constantValue = this.constantValue + 1;
        console.log("Constant Value From serviceService: " + this.constantValue + " getValueFunction called with " + name);
        return this.constantValue;
    };

     this.subFunction = function(){};
    this.subFunction.prototype.constantValue =5;

    this.subFunction1 = function(){};
    this.subFunction1.prototype.constantValue =10;
    this.subFunction1.prototype.constructor=new getValue("avc");






});
