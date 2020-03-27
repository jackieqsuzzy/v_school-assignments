var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// var charcterAlph = alphabet.split("")
// console.log(charcterAlph)

// var both = people.concat(charcterAlph);
// console.log(both)

function forception(people, alphabet){ 
    var newArr = []
    for (var i = 0; i < people.length; i++){
            newArr.push(people[i])
        for(var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j])
        }
    } 
    return newArr
} 

console.log(forception(people, alphabet))

// forception(alphabet, ["hello", "world"])

// function greeting(placeHolder){
    
//     return placeHolder + "infucntion"
// }
// console.log(greeting("hello"))
// console.log(greeting("sing"))
// console.log(greeting("sing"))
// console.log(greeting("sing"))