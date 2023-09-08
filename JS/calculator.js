// const calculator = document.querySelector(".calculator");
// let inputs = calculator.querySelector(".input-container");


// console.log("this is the input container ==>", calculator);
// inputs.addEventListener("click", function (e) {
//   if (e.target.matches("button")) {
//     //do...

//     console.log()

// }
// });

// inputs = e.target;
// const action = input.dataset.action;

// if (!actions) {
//   console.log("number key!");
// }

// if (
//   action === "add" ||
//   action === "subtract" ||
//   action === "multiply" ||
//   action === "divide"
// ) {
//   console.log("operator key!");
// }

// if (action === "decimal") {
//   console.log("decimal key!");
// }

// if (action === "clear") {
//   console.log("clear key!");
// }

// if (action === "calculate") {
//   console.log("calculate key!");
// }

const buttons =  document.querySelectorAll("button");

const handleClick = (event) => {
    const value = event.target.textContent
    
    console.log(value);
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})
