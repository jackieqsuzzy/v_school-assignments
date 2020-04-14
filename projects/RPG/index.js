const readlineSync = require("readline-sync")

let isAlive = true
let hasWon = false

const name = readlineSync.question ("what is your name?")
    console.log(`Welcome to the Colossal Adventure ${name}`)

while (isAlive && !hasWon){
    const action = readline.keyIn("would you like to [w] Walk, [p] Print Inventory, or [q] Quit?, {limit: 'wpq'})
    if (action === 'w'){
        walk()
    } else if (action === 'p'){
        printInventory()
    } else if (action === 'q'){
        console.log('you quite')
        isAlive = false
    }
}
    isAlive = false 
}
//     function Character(name) {
//         this.name = name;
//         this.health = 100;
//         this.status = "Good"
//       }

//       function enemy () {

//       }

//     console.log()
//     function walking () {
//         let ranNum = Math.floor(Math.random() * 4)
//         if (ranNum = 0){
//             enemyAttacks()
//         } else {
//             console.log("continue walking")
//         }
//     }

//     function enemyAttacks () {
//         if (Character)
//     }
//     //create function character 
//     //create on function character for enemy that will be for three enemies 
//     //create a for function for the player walking
//     //console.log"enter "w" to continue walking")
//     // write and if statement that determines if the player is walking. If the player is walking create an function that will let the player know an enemy has appeared. Within the function there's a 1/3 or 1/4 chance fo being attacked. 
//     // write an function that contains three different enemies that will show up at random times.
//     // write if statment for when the scenario of the enemy showing up.
//     // give the user a choice to run or attack. write at if statemnt that has an outcome to which choice the user chooses. 
//     // write an if statement for 50% change of escaping
//     //need a function for enemy encounter
//     //function for enemies attacking
//     //function for running away
//     //function that chooses what enemy youre attacking similar to math.floor.... out of three enemies 
