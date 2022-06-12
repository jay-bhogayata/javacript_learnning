for(let i = 0 ; i <= 10 ; i++){
    if(i == 5 ){
        break;
    }
    console.log(i);
}
// we can incres by 2 or 5 using i = i + 2 or i = i + 5

let country = new Array("India","USA",12,"UK","Australia");

// for(let i = 0 ; i < country.length ; i++){
//     if (typeof country[i] !== 'string') continue;
//     console.log(country[i]);
// }
//be careful about use "<" not use "<="


let i = 0;

while(i < country.length){
    
    console.log(country[i]);
    i++;
}

let j = 0;
do{
    console.log(country[j]);
    j++;
}while(j < country.length)
// minumum 1 time run