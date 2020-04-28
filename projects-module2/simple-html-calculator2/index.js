const adder = document.addition

adder.addEventListener('submit', function(){
    event.preventDefault()
    const num1 = parseInt(adder.num1.value)
    const num2 = parseInt(adder.num2.value)
    document.getElementById("added").textContent = `Answer = ${num1 + num2}`

})
const sub = document.subtraction

sub.addEventListener("submit", function(){
    event.preventDefault()
    const num11 = parseInt(sub.num11.value)
    const num22 = parseInt(sub.num22.value)
    document.getElementById("subtracted").textContent = `Answer = ${num11 - num22}`
})

const multiply = document.multi

multiply.addEventListener("submit", function(){
    event.preventDefault()
    const num111 = parseInt(multiply.num111.value)
    const num222 = parseInt(multiply.num222.value)
    document.getElementById("multiplied").textContent = `Answer = ${num111 * num222}`
})