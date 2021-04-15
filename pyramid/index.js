// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function repeat(str, log) {

    let strs = ''
    for (let i = 0; i < log; i++) {
        strs += str
    }
    return strs
}

function pyramid(n, i = 1) {
    if (n < i) {
        return;
    }
    let maxLen = n * 2 - 1
    let suq2 = repeat("#", (i * 2 - 1))
    let empStr = repeat(" ", ((maxLen - suq2.length) / 2))
    console.log(empStr + suq2 + empStr)
    pyramid(n, i + 1)
}


module.exports = pyramid;

// function pyramid(n) {

// for (let i = 1; i <= n; i++) {
//     let suq2 = ("#").repeat((i * 2 - 1))
//     let empStr = (" ").repeat(((n * 2 - 1) - suq2.length) / 2)
//     console.log(empStr + suq2 + empStr)
// }
// }