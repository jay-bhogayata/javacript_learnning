const User = require("./06classjs.js")


const jay = new User("jay" , "jaybhogayata53@gmail.com" )

console.log(jay.getInfo());

console.log(jay.getInfo().email);

jay.enrollCourse("react js bootcamp")
jay.enrollCourse("anguler js bootcamp")

console.log(jay.gteCorseList());

var course = jay.gteCorseList();

course.forEach(c  => console.log(c))
