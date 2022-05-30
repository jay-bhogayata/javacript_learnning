/*
Define a function can answer role of a user
A user can be following roles:
admin : get full access
subadmin : get access to create and delete courses
testprep : get access to create and delete tests
user : get access to consume content
other : tril user

*/


let getRole =  function (name , user){
    switch (user) {
        case "admin":
            return `welcome ${name} you have get full access`;
            
        case "subadmin":
            return `welcome ${name} you have get access to create and delete courses`;
            
        case "testprep":
            return ` welcome ${name} you haveget access to create and delete test `;
            
        case "user":
            return ` welcome ${name} you can watch content of course `;
        default:
            return `welcome ${name} you are tril user`;
            
    }
}

console.log( getRole("jay","subadmin") );

let user = console.log(getRole("varsha","user"));