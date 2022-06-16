// var max = Math.max(12,23,56,78);
// console.log(max);

// var myObj = {}

// Object.assign(myObj , {a:1, b:2 , c:3} , {
//     z:9 , Y:8 , x:7
// })

// console.log(myObj);


function SumOne(a,b){
    return a+b;
}

var myA = [5,4]

// console.log(SumOne(5,4));
// console.log(SumOne(...myA)); // spread op


function sumTwo(...args)//rest op
{

    console.log(args);

    let sum = 0

    for (const arg of args) {
        sum += arg
    }
    return sum;
}

console.log(sumTwo(12,23,45));


function func(a,b,...args)//rest op
{

    console.log(`this is args ${args}`);
    
    let mul = a*b

    let sum = 0

    for (const arg of args) {
        sum += arg
    }
    return [sum,mul];
}


console.log(func(2,3,1,1,1));