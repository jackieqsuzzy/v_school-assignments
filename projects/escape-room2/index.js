// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.

const readlineSync = require("readline-sync")

const name = readlineSync.question ("what is your name?")
    console.log("welcome to the game")

const options = ["put your hand in the hole", "find key", "opens the door"]
gameOver = false
hasKey = false
while (!gameOver){
    const userChoice = readlineSync.keyInSelect (options, "what would you like to do?")
    if (userChoice === 0){
        console.log("sorry your hand is cut of")
        console.log ("your dead")
        gameOver = true
    } else if (userChoice === 1){
        console.log("nice you found the key, you can open the door now")
        hasKey = true
    } else if (userChoice === 2){
        { if (hasKey === true){
            console.log("true again you need the key first")
            gameOver = true
            }
        }
    }console.log("the door is locked find the key")
}
