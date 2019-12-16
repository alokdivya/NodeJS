var Int=0;
var timer = setInterval(function(){
    Int= Int + 2;
    console.log(Int + ' seconds passed');
if (Int >5){
    clearInterval(timer)
}

},2000);