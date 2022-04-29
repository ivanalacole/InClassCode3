// ///1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//       return num1 + num2;
// };

let arrowMyFunction = (num1, num2) =>{
    return num1 + num2;
};


//2 Convert the following function into a 
//one-lined arrow function without a return statement
 //(the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//     return money + 100;
// };

let arrowAdd100 = (money) => `${money} + 100`;
(arrowAdd100())


//3 Create an arrow function that takes TWO arguments, 
//a string and a single letter. 
let countLetters = (word, letter) => {
  
//The function will count the number 
//of times the specified letter occurs in the string. 

// Create a for loop to count through the string 
let str = 'Biscuits'
for(let i = 0; i < str.length; i++);
//i know we have to take a method to loop through 
//the amount of times the letter occur 

};

//log the answer to the console

// **Not case sensitive
console.log(countLetters('I like to eat biscuits'),'I');

//Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4