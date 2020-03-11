const readlineSync = require("readline-sync");

function addNum(num1, num2){
    console.log('running add')
    return (parseInt(num1) + parseInt(num2))
}
function subnum(num1, num2){
    return (num1 - num2)
}
function dividnum(num1, num2){
    return (num1 / num2)
}
function multinum(num1, num2){
    return (num1 * num2)
}

var num1 = readlineSync.question ("what is your first number?")

var num2 = readlineSync.question ("what is the second number?")

var operatation = readlineSync.question ("what operation do you want to use?")

function calculate (num1, num2, operation){
    if (operation === "+"){
        return addNum(num1, num2)
    } else if(operation === "-"){
        return subnum(num1, num2)
    }else if(operation === "/"){
        return dividnum(num1, num2)
    }else if(operation === "*"){
        return multinum(num1, num2)
    }
}

console.log(calculate(num1, num2, operation))


