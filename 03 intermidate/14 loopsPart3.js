const names = ["yt" , "fb" , "insta" , "amazon" , "google" , "Netflix"]

for(const n of names){
    console.log(n);
}

const symbol = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagram",
    lco : "learnCodeOnline"
}

for(const s in symbol){
    console.log(`key is ${s} and value is${symbol[s]}`);
}

// for of major used for array when for in is used in object 