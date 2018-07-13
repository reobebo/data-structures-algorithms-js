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
    const nString = n.toString().split('').reverse().join('');
    let final = parseInt(nString);
    return final * Math.sign(n);

}
console.log(reverseInt(211));

module.exports = reverseInt;
