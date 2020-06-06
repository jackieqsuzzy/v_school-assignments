const readline = require('readline-sync')

// let gameActive = true


class Player {
    constructor (name, totalCoins, status, hasStar = false, gameActive = true){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        if (this.status === "powered up"){
            this.status = "big"
        }else if(this.status === "big"){
           this.status = "small"
        }else if(this.status === "small"){
            this.status = "dead" 
            this.gameActive = false 
            console.log("Game Over")
            
        }
    }
    
    gotPowerup(){
        if (this.status === "small"){
            this.status = "big"
        }else if (this.status === "big"){
            this.status = "powered up"
        } else if (this.status === "powered up"){
            this.hasStar = true
            console.log("Congrats you got a star!")
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(` Name : ${this.name} \r\n Total Coins: ${this.totalCoins} \r\n Status: ${this.status} \r\n`)
    }
}

const mario = new Player("Mario", 0, "big", false, true)



const interval = setInterval (()=>{
    const random = Math.floor(Math.random()*4)+1
    if (random === 1){
        mario.gotHit()
        if (mario.status === "dead"){
            clearInterval(interval)
        }
    }else if (random === 2){
        mario.gotPowerup()
    }else {mario.addCoin()}{
        mario.print()
    }
    
}, 1000)
