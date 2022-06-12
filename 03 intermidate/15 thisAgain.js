// user.getCoursecount() 
// this is not regular function call


console.log(this);

var user = {
  firstName: "jay",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this); // point toword window object
    }
    sayHello();
  },
};

user.getCourseCount();
