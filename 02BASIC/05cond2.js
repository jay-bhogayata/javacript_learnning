// user is aloowed to make purchse when he is :
// logged in
// email is varified    
// cardinfo - valid
// if any one messing stop purchase

let isLoggedIn = true
let isEmailVarified = true
let cardInfoValid = true

if(isLoggedIn && isEmailVarified && cardInfoValid){
    console.log("allowed to make purchase");
}
else{
    console.log("not allowed to make purcahse");
}