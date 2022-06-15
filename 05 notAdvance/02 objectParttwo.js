var User = {
    name : "",
    getUserName : function(){
        console.log(`user name is :${this.name}`);
    }
}

var jay = Object.create(User);
console.log(jay);
jay.name = "Jay";
jay.getUserName();


var sam = Object.create(User , {

    name : {value : "sammy"},
    courseCount: {value : 3},

})

sam.getUserName();