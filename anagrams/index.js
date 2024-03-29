// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function cleanString(strs) {
    strs = [...strs.toLowerCase()].sort()
    return strs.reduce((str, char) => {
        if (char >= "a" && char <= "z" && !str.includes(char) || char >= "0" && char <= "9") {
            str += char
        }
        return str
    }, "")
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}


anagrams('RAIL! SAFETY!1', 'fairy tales1')
module.exports = anagrams;