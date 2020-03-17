// var readlineSync = require("readline-sync")

// var result = document.querySelectorAll(".container > div")
// console.log(Array.from(result))

// for (var i = 0; i < result.length; i++) {
//     result[i].textContent = "** REDACTED **"
// }

// var numbers = [1,2,3,4,5,6]

// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] % 3 === 0){
//         console.log(numbers[i])
//     }
// }

// h1 = document.getElementsByTagName("h1")[0];
// h1.innerHTML = "hello" - // how to change the text with out an Id

// p = document.getElementsByTagName("p")[0];
// p.innerHTML = "changed again"

// var text = document.querySelector("#header").textContent
// document.querySelector("#paragraph").textContent = text // how to change the text with and ID

// var header = document.getElementById("header")
// header.style.color = "blue"

// document.querySelector("#header").className += "new-class"

// document.querySelector("#header").classList.add("new-class")
// console.log(document.querySelector("#header").className)

// var text = document.querySelector(".menu").textContent
// document.querySelector(".footer").textContent = text

// var text = document.querySelector(".content").textContent
// document.querySelector(".menu").textContent = text

// document.body.style.backgroundColor = "pink"

// var newP = document.createElement("p")
// newP.textContent = "hello this is my paragraph"
// newP.style.textAlign = "center"
// newP.style.fontSize = "30px"
// document.body.append(newP)


// document.body.innerHTML += "<p id='paragraph' > Amaing! </p>"
// document.getElementsById('paragraph').style.textAlign = "center"


var powerRangers = [
   { name: "jason lee scott", color: "red"},
   { name: "kimberly hart", color: "pink"},
   { name: "zack taylor", color: "black"},
   { name: "trini kwan", color: "yellow"},
   { name: "billy cranston", color: "blue"},
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i]  + "</li>"
}
