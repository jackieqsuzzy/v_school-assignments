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
// h1.innerHTML = "hello"

// p = document.getElementsByTagName("p")[0];
// p.innerHTML = "changed again"

// var text = document.querySelector("#header").textContent
// document.querySelector("#paragraph").textContent = text

// var header = document.getElementById("header")
// header.style.color = "blue"

// document.querySelector("#header").className += "new-class"

document.querySelector("#header").classList.add("new-class")
console.log(document.querySelector("#header").className)