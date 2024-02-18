// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((accumulator, currentChar) => {
    return currentChar + accumulator;
  }, "");
}

module.exports = reverse;

// CHAIN METHOD
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// NORMAL LOOP METHOD
// function reverse(str) {
//   revrsed_str = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     revrsed_str += str[i];
//   }
//   return revrsed_str;
// }

//NEW LOOP METHOD
// function reverse(str) {
//     let reversed = "";
//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }
