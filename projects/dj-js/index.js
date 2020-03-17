const squareIt = document.getElementById("colorsquare")
squareIt.addEventListener("mouseover", function () {
    squareIt.style.backgroundColor = "blue"
})
squareIt.addEventListener("mousedown", function (){
    squareIt.style.backgroundColor = "red"
})


squareIt.addEventListener("mouseleave", function (){
    squareIt.style.backgroundColor = "yellow"
})

squareIt.addEventListener("dblclick", function (){
    squareIt.style.backgroundColor = "green"
})

window.addEventListener("wheel", function (){
    squareIt.style.backgroundColor = "orange"
})