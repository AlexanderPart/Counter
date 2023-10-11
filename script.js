const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
let counter = document.querySelector(".counter")
let btn = document.querySelectorAll(".btn")
let counterNumber = 0;

function checkColor() {
    if(counterNumber > 0) {
      counter.style.color = "green"
    } else if (counterNumber < 0) {
      counter.style.color = "red"
    } else {
      counter.style.color = "black"
    }
}

// function counterCount() {
//     let i  
//     if(i === 2) {
//       counterNumber += 1
//     } else if (i === 0) {
//       counterNumber -= 1
//     } else {
//       counterNumber = 0
//     }
// }

// increase.addEventListener("click", function(){
//     counterNumber += 1
//     counter.textContent = counterNumber
//     checkColor()
// })

// decrease.addEventListener("click", function(){
//     counterNumber -= 1
//     counter.textContent = counterNumber
//     checkColor()
// })

// reset.addEventListener("click", function(){
//     counterNumber = 0
//     counter.textContent = counterNumber
//     counter.style.color = "black"
//     checkColor()
// })


for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    if(i === 0) {
      counterNumber -= 1
      counter.textContent = counterNumber
      checkColor()
    } else if (i === 2) {
      counterNumber += 1
      counter.textContent = counterNumber
      checkColor()
    } else {
      counterNumber = 0
      counter.textContent = counterNumber
      checkColor()
    }
  })
}
