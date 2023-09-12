

// Declaring value for  math expression and answer variable
const inputField = document.getElementById('expression');
const outputField = document.getElementById('answer');

// Insert number on input fied
const insertNum = num => inputField.textContent += num;
// function insertNum (num) {
//     if (num = " " )
//     inputField = 0;
// } else {
//     return inputField.textContent += num;
// }


// Do operation using eval()
const equalTo = () => (inputField.textContent ) ? outputField.textContent = eval(inputField.textContent) : false;

// Remove 1 val at time
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Clear all the input
const clearInput = () => inputField.textContent= '';
