var User = function(firstName , courseCount){
    this.firstName = firstName ;//another way of defining the object
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course cout is ${this.courseCount}`);
    };
};


User.prototype.getfirstName = function(){
    console.log(`your first name is ${this.firstName}`);
} 

var jay = new User("Jay" , 5)
jay.getCourseCount();
if (jay.hasOwnProperty("firstName")) {
    
    jay.getfirstName();
}
// console.log(jay);

var kishan = new User("kishan" , 2)
kishan.getCourseCount()
kishan.getfirstName();
// console.log(kishan);

//User.hasOwnProprty