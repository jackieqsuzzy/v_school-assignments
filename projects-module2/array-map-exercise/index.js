// 1. 1) Make an array of numbers that are doubles of the first array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const newarray = arr.map(myFunction)

// function myFunction(num){
//     return num * 2;
// }

// console.log(newarray)

// 2. Take an array of numbers and make them strings

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const arr2 = arr.toString();

// console.log(arr2)

// 3. Capitalize each of an array of names

// const names = ["jackie", "will", "katie", "mom"];

// const toUpper = names.map(item => item.charAt(0).toUpperCase() + item.substr(1).toLocaleLowerCase());

// console.log(toUpper)

// 4. Make an array of strings of the names

// const namesAges = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];

// const namesOnly = namesAges.map(namesAges => `${namesAges.name}`);

// console.log(namesOnly)

// 5. Make an array of strings of the names saying whether or not they can go to The Matrix

// const matrixNames = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];

// const result = matrixNames.filter(function (user){
//     return user.age > 70 
// })

// const result = matrixNames.map(ageChecker);

// function ageChecker(item) {
//     return item.age <= 70 ? (item.name + ' is under age!!') : (item.name + ' can go to The Matrix.');
// }

// console.log(result);

// console.log(result)


// 6. Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr) {
    arr.map(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });
    
    arr.forEach(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });
  }
  
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
console.log(readyToPutInTheDOM)



