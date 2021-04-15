// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charReduce = [...str].reduce((max, char) => {
        max[char] = max[char] + 1 || 1
        return max
    }, {})


    // This

    let maxNum = 0
    const maxChar = Object.entries(charReduce).reduce((maxChar, char) => {
        if (char[1] > maxNum) {
            maxNum = char[1]
            maxChar = char[0]
        }
        return maxChar
    }, [])
    return maxChar

    // OR

    // This
    // let maxChar = ""
    // let maxNum = 0
    // for (let char in charReduce) {
    //     if (charReduce[char] > maxNum) {
    //         maxChar = char
    //         maxNum = charReduce[char]
    //     }

    // }
    // return maxChar

}

module.exports = maxChar;