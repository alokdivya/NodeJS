//normal function sattement 
function sayHi(){
    console.log("Hiii");
}
sayHi();


--------------------------------------------------------------------------------------------------------------------------
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


--------------------------------------------------------------------------------------------------------------------------
//Calling another function---------------

function callFunction(fun){
    fun();
}
var Bye = function(){
    console.log("Byeee");
}
callFunction(Bye);
---------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------//------------------------------------------------
//file1.js    
var app1 = function(array){
return 'There are ' + array.length + ' elements in the array';
};
module.exports = app1;
------------------------------------------------------------------------//-------------------------------------------------
//file2.js
var app1 = require('./file1.js');
console.log(app1(['a','b','c','d']));
------------------------------------------------------------------------//--------------------------------------------------
//running the code
node file2.js
//Output
//There are 4 elements in the array
------------------------------------------------------------------------//--------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------
//Multiple function call in another file:
-----------------------------------------------------------------------//---------------------------------------------------
//file1.js
  var app1 = function(array){
     return 'There are ' + array.length + ' elements in the array';
};

var app2= function(a,b){
    return `sum of two numbers is ${a+b}`;
};
var alpha = 6.54;

module.exports.app1 = app1;
module.exports.app2 = app2;
module.exports.alpha = alpha;



//OR

  var app1 = function(array){
     return 'There are ' + array.length + ' elements in the array';
};

var app2= function(a,b){
    return `sum of two numbers is ${a+b}`;
};
var alpha = 6.54;

module.exports{
app1 : app1,
app2 : app2,
alpha : alpha
};

----------------------------------------------------------------//------------------------------------------------------------
//file2.js
var data = require('./file1.js');
console.log(data.app1(['a','b','c','d']));
console.log(data.app2(6,7));
console.log(data.app2(data.alpha,5));
-------------------------------------------------------------------------------------------------------------------------------
    
    
    
    
