var readline = require("readline-sync")
var mathoperations = ["+", "-", "/", "*"]


var numb1 = readline.question("whats your first number?")

var operation = readline.keyInSelect(mathoperations, "what operation do you want to use?")

var numb2 = readline.question("whats your second number?")

console.log(calculate(operation, numb1, numb2))


function addfunction (numb1, numb2){
    //method that turns strings into numbers
    var sum = numb1 + numb2
    console.log('fired',sum)  
    return sum
}


function subfunction (numb1, numb2){
    var sub = numb1 - numb2
    return sub
}


function multifunction(numb1, numb2){
    var mult = numb1 * numb2
    return mult
}

function dividfunction(numb1, numb2){
    var divide = numb1 / numb2
    return divide
}


function calculate (operation, numb1, numb2){
    // var result = 0
    console.log(typeof numb1)
    console.log(numb2)
    console.log('operation: ', operation)
    
    if (operation === '0'){
        console.log(1111,'fired')
         addfunction(numb1, numb2)
        // adding = numb1 + numb2
        // adding
    } else if (operation === 2){
        subfunction()
    } else if (operation === 3){
        dividfunction()
    } else if(operation === 4){
        multifunction()
    }

    return "this " + value + " is the answer"
}



