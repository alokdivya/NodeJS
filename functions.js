//normal function sattement 
function sayHi(){
    console.log("Hiii");
}
sayHi();



//Expression function


var Bye = function sayBye(){
        console.log("Byeee");
    }

Bye();

//Another Expression function

var Bye = function(){
    console.log("Byeee");
}

Bye();



//Calling another function---------------

function callFunction(fun){
    fun();
}
var Bye = function(){
    console.log("Byeee");
}
callFunction(Bye);
