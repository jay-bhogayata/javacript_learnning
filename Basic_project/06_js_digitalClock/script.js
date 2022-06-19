let hour = document.querySelector(".hour")
let min  = document.querySelector(".min")
let sec  = document.querySelector(".sec")


function displayTime() {
    
    let time = new Date();
    // console.log(time);
    let minuteValue = time.getMinutes()
    let secondValue = time.getSeconds()
    let hourValue = time.getHours()
    let day = time.toLocaleTimeString()
    // console.log(day);
    
    // console.log(day);

    
    
    if(hourValue > 12){
        
        hour.innerHTML = (hourValue - 12)
    }
    else{
        
        hour.innerHTML = hourValue
    }
    min.innerHTML = minuteValue
    sec.innerHTML = secondValue
}

setInterval(displayTime,1000)