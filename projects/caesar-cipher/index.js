var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

var alphabet = 'abcdefghijklmnopqrstuvwxyz'

function caeserCipher(input, shift){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // str = str.toLowerCase();
    var result = '';
    for (var i = 0; i < input.length; i++){
        if (alphabet.indexOf(input[i]) !== -1) {
            var index = alphabet.indexOf(input[i])
            result += alphabet[(index + shift) % 26]
        } else {
            result += input[i]
        }
    }
    return result;
}
console.log(caeserCipher(input, shift))