// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  let objA = {};
  let objB = {};
  let modifiedStringA = stringA.toLowerCase().replace(/[^\w]/g, '')
  let modifiedStringB = stringB.toLowerCase().replace(/[^\w]/g, '')

  const buildCharMap = (str, obj) => {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]]++
      } else {
        obj[str[i]] = 1
      }
    }
    return objA
  }

  buildCharMap(modifiedStringA, objA)
  buildCharMap(modifiedStringB, objB)

  // Check to see if the objects' keys are different lengths; if they are, then we immediately know they're not anagrams, as anagrams must have the same key lengths
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false
  }

  // Check to see if all values associated with every key are equal between both objects
  for (let value in objA) {
    if (objA[value] !== objB[value]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
