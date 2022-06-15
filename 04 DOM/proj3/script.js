const courses = [
    {
        name : "complete ReactJS course",
        price:  "2.3"
    },
    {
        name : "complete Anguler course",
        price:  "2.7"
    },
    {
        name : "complete c++ course",
        price:  "2.0"
    },
    {
        name : "complete python course",
        price:  "2.6"
    },
    {
        name : "complete go course",
        price:  "3.3"
    },
];




function genrateList(){
    const ul = document.querySelector(".list-group");

    ul.innerHTML = "";
    
    courses.forEach((course) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        
        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);


        li.appendChild(span);
        ul.appendChild(li);


    })

}

// genrateList()

window.addEventListener("load",genrateList);


const btn1 = document.querySelector(".sort-btn-inc");
const btn2 = document.querySelector(".sort-btn-dec");


btn1.addEventListener("click",()=>{
    courses.sort( (a,b) => a.price - b.price )

    genrateList();

})


btn2.addEventListener("click",()=>{
    courses.sort()
    courses.reverse()
    genrateList();

})