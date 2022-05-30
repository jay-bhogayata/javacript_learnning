var user = {
    fierstName :  "Jay",
    lastName   :  "Bhogayata" ,
    role       :   "Admin",
    loginCount :    45,
    facebookSingedIn : true,
    courseList : [],    
    buyCourse  : function (courseName) {
        // this is refred to a user
        this.courseList.push(courseName) 
    },
    grtCourseCount: function ( ) {
        return  `${this.fierstName} is enrollend in ${this.courseList.length}`
    }
};

var courseName =  true;


console.log(user.grtCourseCount());

user.buyCourse("react js course")

console.log(user.grtCourseCount());

user.buyCourse("angular course")

console.log(user.grtCourseCount());


console.table(user);


// create info method inside the user object and print whole information aboutobject