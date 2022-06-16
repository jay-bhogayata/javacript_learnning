const uno = ()=>{
    return "I am one"
}

// const des =  ()=>{
//     setTimeout(()=>{
//         return "I am two";
//     }
//     ,3000)
   
// }

const des = () => {
    return new Promise((resolve , reject)=>{
       setTimeout(()=>{
            resolve("I am two")
       },3000)
    })
}


const tres = ()=>{
    return "I am three"
}

const callMe = async ()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await des();
    console.log(valTwo);

    let valthree = tres();
    console.log(valthree);
} 

callMe()