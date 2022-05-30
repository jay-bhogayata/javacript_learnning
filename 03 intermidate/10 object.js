var user = {
    fierstName :  "Jay",
    lastName   :  "Bhogayata" ,
    role       :   "Admin",
    loginCount :    45,
    facebookSingedIn : true,
};

console.log(user.fierstName);
console.log(user["lastName"]); // get in mind plz

user.loginCount = 89
console.log(user);
console.table(user)
