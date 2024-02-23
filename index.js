// let ourP = document.getElementById("greet")
let ourP = document.querySelector("#greet");
console.log(typeof ourP);
ourP.style.fontSize = "40px";
ourP.textContent = "Hello There!!!";

// let ourButtons = document.getElementsByClassName("btn");
//differentiate btwn a HTMLCollection VS NodeList----assignment
let ourButtons = document.querySelectorAll(".btn");
ourButtons.forEach(function (btnelem, index) {
  btnelem.textContent = "click me";
  btnelem.style.margin = "20px";
  if (index % 2 == 0) {
    btnelem.style.backgroundColor = "orangered";
    btnelem.style.color = "white";
  }
});

//TASK -rewrite this(forEach) using a for loop--add a green background on odd buttons
//for(let ind = 0;ind)

for (i = 0; i < ourButtons.length; i = i + 1) {
  let btnelem = ourButtons[i];
  if (i % 2 == 1) {
    btnelem.style.backgroundColor = "green";
  }
}
