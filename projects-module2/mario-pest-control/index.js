const baddieTotal = document.marioBaddies 
const timer = 10
document.getElementById("clicker").innerHTML = localStorage.clickcount
document.getElementById("timer").innerHTML = String(timer)

function timerCountDown() {
    if (timer > 0) {
        setInterval(() => {
            timer = timer - 1
        }, 1000)
    }
}

baddieTotal.addEventListener("submit", function(){
    event.preventDefault()
    const baddie1 = baddieTotal.goombainput.value * 5
    const baddie2 = baddieTotal.bobOmb.value * 7
    const baddie3 = baddieTotal.cheepCheeps.value * 11
    let totalbaddie = baddie1 + baddie2 + baddie3
    const newTotal = document.getElementById("baddieTotal")
    newTotal.textContent =`Total Coins ${totalbaddie}`
    if (timer >= 10) {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("clicker").innerHTML = "You have clicked the button " +
      localStorage.clickcount + " time(s).";
    }
})



