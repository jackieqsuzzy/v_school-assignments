const baddieTotal = document.marioBaddies 

baddieTotal.addEventListener("submit", function(){
    event.preventDefault()
    const baddie1 = baddieTotal.goombainput.value * 5
    const baddie2 = baddieTotal.bobOmb.value * 7
    const baddie3 = baddieTotal.cheepCheeps.value * 11
    let totalbaddie = baddie1 + baddie2 + baddie3
    const newTotal = document.getElementById("baddieTotal")
    newTotal.textContent =`Total Coins ${totalbaddie}`

})

const 
