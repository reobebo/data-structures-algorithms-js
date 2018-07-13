// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    const strRev = str.split('').reverse().join('');
    return strRev;
}

//solution 2
function reverse1(str) {
let reversed='';

for(let character of str){
    reversed = character + reversed;
}
return reversed;
}

//solution 3
//solution 2
function reverse2(str) {
   return str.split('').reduce((reversed,character)=>
         character+ reversed
    ,'');
    }
    

const output = reverse('billy');
const output1 = reverse1('billy');
const output2 = reverse1('billy');
console.log(output);
console.log(output1);
console.log(output2);


module.exports = reverse;
