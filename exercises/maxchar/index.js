// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let strObj = {};
  let max = 0;
  let maxCharacter = '';

  for (let i = 0; i < str.length; i++) {
    if (strObj[str[i]]) {
      strObj[str[i]] ++
    } else {
      strObj[str[i]] = 1;
    }
  }

  for (let char in strObj) {
    if (strObj[char] > max) {
      max = strObj[char];
      maxCharacter = char;
    }
  }
  return maxCharacter;
}

module.exports = maxChar;
