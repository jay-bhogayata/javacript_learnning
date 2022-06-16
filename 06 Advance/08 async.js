const uno = ()=>{
    console.log("I am one");
}

const des = ()=>{
    setTimeout(()=>{
        console.log("whooooo");
    },3000)
    console.log("I am two");
}

const tres = ()=>{
    console.log("I am three");
}

uno()
des()
tres()


// reda mdn eventloop page