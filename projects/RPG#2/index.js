const readline = require('readline-sync')
let isAlive = true
let hasWon = false
console.log('Hello welcome to the game')
const name =  readline.question('what is your superhero name? ')
function Hero (name, hp, ap){
    this.name = name
    this.hp = hp;
    this.ap = ap;
    this.inventory = []
}
const player1 = new Hero(name, 100, 50)
player1.inventory.push('Web Slinger')
function Enemy (name, hp, ap){
    this.name = name
    this.hp = hp;
    this.ap = ap;
}
const enemy1 = new Enemy('Joker', 80, 20)
const enemy2 = new Enemy('Loki', 40, 10)
const enemy3 = new Enemy('Vulture', 10, 80)
const enemies = [enemy1, enemy2, enemy3]

while(isAlive && !hasWon){
    const action = readline.keyIn('Would you like to [w] Walk, [p] Print Inventory, or [q] Quit?', {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        printInventory()
    }else if (action === 'q'){
        console.log('You quit')
        isAlive = false
    }
}

function walk (){
    const random = Math.floor(Math.random()*4)+1
    if(random === 1){
        enemyEncounter()
    }else{
        console.log('You walk peacefully')
    }
}

function run(){
    const escape = Math.floor(Math.random() * 3)
    if (escape === 1){
        walk()
    }
    else if (escape === 2)


    console.log("you didnt escape")
        enemyEncounter()
    }
        function enemyEncounter (){
            const enemy = selectEnemy()
            console.log(`You encountered ${enemy.name}`)
            const action = readline.keyIn('Would you like to [f] fight, or [r] run?', {limit: 'fr'})
            if(action === 'f'){
                fight(enemy)
            }else if(action === 'r'){
                run()

            }
        }
function printInventory(){
    console.log(player1.inventory)
}
function selectEnemy(){
    return enemies[Math.floor(Math.random()*enemies.length)]
}
function fight(enemy){
    while (player1.hp > 0 && enemy.hp > 0){
        const attackDamage = Math.floor(Math.random() * 5) + 5
        enemy.hp = enemy.hp - attackDamage
        console.log("the " + enemy.name + " did " + attackDamage +  " points of damage now your hp is this")
        player1.hp = player1.hp - attackDamage
        console.log(enemy.hp)
        console.log(player1.hp)

    }
    if (player1.hp > 0 && enemy.hp <= 0){
        kills(enemy)
    } else {
        enemyKills(enemy)
    }
        
}
function kills(enemy){
    player1.inventory.push('Web Slinger')
    console.log("You defeated the enemy and picked a Web Slinger")
}
function enemyKills(enemy){
    if (player1.hp <= 0 && enemy.hp <= 0){
        console.log("You and Enemy killed eachother")
    } else {
        console.log("You were defeated by the enemy, Game Over")
    }
}