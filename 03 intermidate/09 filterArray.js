// in javascript array and object are mutable and string and number's are
// imutable
const testArray  = [2,4,6,3,8,9,5]
// testArray[0] = 56



// console.log(testArray.fill(0));
// console.log(testArray);

// console.log(testArray.fill("j"));
// console.log(testArray.fill("h",0));

// console.log(testArray.fill("j",2));


console.log(testArray.fill("j",2,5));
// fill up array with last element-1 if eg. 5 it fill till index 4


const myNumbers = [22,23,56,89,78,45]

const result = myNumbers.filter((num) => num!= 56)
// we can give any condtion at this point
console.log(result);


var user = ["Jay" , "kishan" , "varsha" , "divya" , "john"]
console.log(user.slice(1,2));
console.log(user.slice(1));

var user = ["Jay" , "kishan" , "varsha" , "divya" , "john"]
console.log(user.splice(1,2,"Hi"));
// instend of 1,2(kishan,varsha) add hi


console.log(user);


var user = ["Jay" , "kishan" , "varsha" , "divya" , "john"]
console.log(user.splice(1,3,"Hi","bye"));
console.log(user);

var country = ["india" , "srilanka" , "nepal" , "bangladesh" , "usa"]
country.splice(1,3,"Japan")
console.log(country);