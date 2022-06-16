var counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");


var count = 1;

setInterval(()=>{
    if(count < 1000){
        count++;
        counter.innerText = count;
        
    }
},1)

setTimeout(()=>{
    followers.innerHTML = "followers on instagram";
},5000)