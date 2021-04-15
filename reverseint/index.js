// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt([...n.toString()].reverse().join("")) * Math.sign(n)

}

module.exports = reverseInt;

/**
 * Another Solutions
 * 
 * const reversed = [...n.toString()].reverse().join("")
 * 
 * return n < 0 ? parseInt(reversed) * -1 : parseInt(reversed)
 * 
 * return Number([...Math.abs(n).toString()].reverse().join("")) * Math.sign(n)
 * 
 */