// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.



const readlineSync = require("readline-sync")
const name = readlineSync.question("what is your name?")
    console.log('welcome to the game!')


// declare three function into an array
const options = ["put hands in hole", "find the key", "open the door"]
let gameOver = false
let hasKey = false
while (!gameOver){
    const userChoice = readlineSync.keyInSelect (options, "what would you like to do?") //userChoice stores what the user chose
    // keyInSelect gives you the index number of the selected option 
    if (userChoice === 0){
        console.log("oh no! you're hand is cut off!")
        console.log("shit youre dead, game over")
        gameOver = true
    } else if (userChoice === 1){
        console.log("great, you get to open the door")
        hasKey = true
    }else if (userChoice === 2){
    if  (hasKey === true){  //nested for loop 
            console.log("great you get to go to the next level!")
            gameOver = true
        }
        console.log("the door is locked, find the key") // order of operations so that if they choose option "3" first it will read this line of code.a 

    } 
}






 