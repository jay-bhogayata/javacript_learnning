// create app with following rules:
// admin : get full access
// subadmin : get access to create and delete courses
// testprep : get access to create and delete tests
// user : get access to consume content


let userRole = "userr"


switch (userRole) {
    case "admin":
        console.log("get full access");
        break;

    case "subadmin":
        console.log("get access to create and delete courses"); 
        break;

    case "testprep":
        console.log("get access to create and delete test");
        break;
        
    case "user":
        console.log("get access to course content");
        break;
    
    default:
        console.log("unauthorized user");
        break;
        
}


// break is allowed us to not fallthrough