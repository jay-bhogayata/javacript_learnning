// allowed user to course if he is
// looged in from google
// looged in from facebook
// looged in from emial

let loggedInFromGoogle = false
let loggedInFromFacebook = false
let loggedInFromEmial = true


if (loggedInFromEmial || loggedInFromGoogle || loggedInFromFacebook) {

    console.log("welcome to our course library");

}
else{
    console.log("you need to login");
}

