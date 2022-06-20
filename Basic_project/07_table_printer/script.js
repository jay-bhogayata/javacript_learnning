let btn = document.querySelector(".btn");
let table = document.querySelector(".table");

function getvalue() {
  let startNumber = document.querySelector(".start").value;
  let endNumber = document.querySelector(".end").value;

  return [startNumber, endNumber];
}

btn.addEventListener("click", () => {
  tablPrinter();
});

function tablPrinter() {
  let nums = getvalue();
  let start = nums[0];
  let end = nums[1];



if(start > end){
  alert("invalid")
}


  let arr = new Array();
  let count = 0;
  if (start > 0  && end > 0 ) {
    for (i = start; i <= end; i++) {
      for (j = 1; j <= 10; j++) {
        arr.push([`${i} * ${j} = ${j * i} <br>`]);

        count++;
      }
      arr.push([`<hr>`]);
    }
  }
  else{
    alert("enter valid value")
  }
  let ans = arr;
  let printableValue = ans.toString().replace(/,/g, "");
  
  table.innerHTML = printableValue;
}

