// map are not object

var myMap = new Map();

myMap.set(1 , "uno")
myMap.set(2 , "dos")
myMap.set(3 , "tres")
myMap.set(4 , "cuatro")

console.log(myMap);


for (let key of myMap.keys()){
    console.log(`key is ${key}`);
}

for (let value of myMap.values()){
    console.log(`key is ${value}`);
}

for(let[key ,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}
// give key first



myMap.forEach((key)=> console.log(`${key}`));
// abov line is very imp to understand
// it will print values not keys
// give value first

myMap.delete(2)

console.log(myMap);