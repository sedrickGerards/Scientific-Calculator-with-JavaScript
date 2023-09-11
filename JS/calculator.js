// // const calculator = document.querySelector(".calculator");
// // let inputs = calculator.querySelector(".input-container");


// // console.log("this is the input container ==>", calculator);
// // inputs.addEventListener("click", function (e) {
// //   if (e.target.matches("button")) {
// //     //do...

// //     console.log()

// // }
// // });

// // inputs = e.target;
// // const action = input.dataset.action;

// // if (!actions) {
// //   console.log("number key!");
// // }

// // if (
// //   action === "add" ||
// //   action === "subtract" ||
// //   action === "multiply" ||
// //   action === "divide"
// // ) {
// //   console.log("operator key!");
// // }

// // if (action === "decimal") {
// //   console.log("decimal key!");
// // }

// // if (action === "clear") {
// //   console.log("clear key!");
// // }

// // if (action === "calculate") {
// //   console.log("calculate key!");
// // }







// const buttons =  document.querySelectorAll("button");

// const handleClick = (event) => {
//     const value = event.target.textContent
    
//     console.log(value);
// }

// buttons.forEach(button => {
//     button.addEventListener('click', handleClick)
// })


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





// const buttons =  document.querySelectorAll("button");

// const handleClick = (event) => {
//     const value = event.target.textContent
    
//     // if (value === 'calculate') {
//     //     console.log('equal key!')
//     //   }
//     console.log(value);
// }

// buttons.forEach(button => {
//     button.addEventListener('click', handleClick)
// })

const inputField = document.getElementById('expression');


 function insertNum (num) {



    return inputField.textContent += num
    
}
console.log(inputField.textContent);

const outputField = document.getElementById('answer');

function equalTo () {
        if (outputField.textContent == true) {
        return outputField.textContent = eval( inputField.textcontent) ;
    } else {
        return false;
    }

}

// const equalTo = ()  => (outputField.textContent) ? outputField.textContent = eval( inputField.textcontent): false;

const eraseNum = () => inputField.textContent = inputField.textContent.substring(0,  inputField.textContent.length - 1);


const clearInput = () => inputField.textContent = '';



