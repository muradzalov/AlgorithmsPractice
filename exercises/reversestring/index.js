// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString;


  // // Another solution
  // const reversed = str.split('').reverse().join('');

  // return reversed;

}

module.exports = reverse;
