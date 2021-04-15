// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, c = 1, res = [0, 1]) {
    if (n < 2) {
        return 1
    }
    if (n === c) {
        return;
    }
    res.push(res[c - 1] + res[c])
    fib(n, c + 1, res)
    return res[n]

}

module.exports = fib;


// let result = [0, 1];
// for (let i = 0; i < n; i++) {
//     result.push(result[i] + result[i + 1]);
// }
// return result[n];