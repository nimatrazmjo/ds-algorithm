// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
}

module.exports = anagrams2;


// option 1

function anagrams(stringA, stringB) {

  const strCharMap1 = buildCharMap(stringA);
  const strCharMap2 = buildCharMap(stringB);

  if (Object.keys(strCharMap1).length !== Object.keys(strCharMap2)) {
    return false;
  }

  for(let char in strCharMap1) {
    if (strCharMap1[char] !== strCharMap2[2]) {
      return false;
    }
  }
  return true;
  
}

function buildCharMap(str) {
  const charMap = {}
  for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1; 
  }
  return charMap;
}