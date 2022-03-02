// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
// SOLUTION 1
// function hasBalancedParenthesis(string) {
//   parenthesisCounter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if ( string[i] === '(' ) {
//       parenthesisCounter++;
//     } else if ( string[i] === ')' ) {
//       parenthesisCounter--;
//     }
//   }
//   return parenthesisCounter === 0;
// }

// SOLUTION 2
function hasBalancedParenthesis(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if ( string[i] === "(" || string[i] === ")" ) {
        string[i] === "(" ? counter++ : counter--; // Ternary operator
      };
    };
    return counter === 0;
  };
  
  // SOLUTION 3
  // const hasBalancedParenthesis = str => str.split('(').length === str.split(')').length
  
  console.log(hasBalancedParenthesis(sample1));