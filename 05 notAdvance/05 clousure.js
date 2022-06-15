function init(){
    var firstName = "JAy";
    function sayfirstName(){
        console.log(firstName);
    }
    return sayfirstName;
}


var value = init();

value()
// console.log(firstName); 


function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(5);
console.log(add5(4));



console.log(doAddition(5)(10));


// doAddition()()() js curring