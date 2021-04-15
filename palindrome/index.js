// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // return str == str.split("").reverse().join("")

    // return str === [...str].reduce((rev, char) => char + rev, "")

    // str = [...str]
    // let palindStr = true;
    // for (let i = 0; i < str.length; i++) {
    //     palindStr = str[i] == str[str.length - 1 - i] && palindStr
    // }

    return [...str].every((char, i) => char === str[str.length - 1 - i])



}

module.exports = palindrome;