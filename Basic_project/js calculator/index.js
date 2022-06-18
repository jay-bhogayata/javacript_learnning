let equal = document.querySelector("[data-equal]");
let numButton = document.querySelectorAll("[data-num]");
let inputBox = document.querySelector(".input");
let operator = document.querySelectorAll("[data-op]");
let ac = document.querySelector("[data-ac]");
let del = document.querySelector("[data-del]");

for (let i = 0; i < numButton.length; i++) {
  document.querySelectorAll("[data-num]")[i].addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let num = e.target.innerText;
    inputBox.value += num;
  });
}

for (let i = 0; i < operator.length; i++) {
  document.querySelectorAll("[data-op]")[i].addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let op = e.target.innerText;
    inputBox.value += op;
  });
}


equal.addEventListener("click", () => {
  let result = eval(inputBox.value);
  inputBox.value = result;
  console.log(result);
});

ac.addEventListener("click", () => {
    inputBox.value = ""
})

del.addEventListener("click", () => {
    inputBox.value = inputBox.value.slice(0,-1)
})


