// const user  =  ["jay" , 12  , "admin"];

// // var role = user[2]
// // var name = user[0]


// var [name , courseCount , role] = user;

// console.log(role);

const MyUser = {
    name : "jay",
    courseCount : 6,
    role : "admin",
};

console.log(MyUser.courseCount);

const {name , courseCount , role} = MyUser;
// name should be same as object
// we can not use mycoursecount insted of courseCount

console.log(courseCount);

