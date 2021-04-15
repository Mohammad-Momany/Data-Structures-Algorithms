// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    const vowels = ["A", "E", "I", "O", "U"]

    return [...str].filter(char => vowels.includes(char.toUpperCase())).length

}
module.exports = vowels;




// const matched = str.match(/[aeiou]/gi)
// return matched ? matched.length : 0;