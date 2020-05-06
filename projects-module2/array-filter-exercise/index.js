//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const nums = [3, 4, 5, 7, 8, 9]

// const numsabove5 = nums.filter(num => num  > 5)

// console.log(numsabove5)

//2) Given an array of numbers, return a new array that only includes the even numbers.

// const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNums = nums.filter(num => num % 2 === 0)

// console.log(evenNums)

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const fiveCharacters = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const fiveChar = fiveCharacters.filter(x => x.length < 5)

// console.log(fiveChar)

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const celebIlluminati = ([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]);

// const Illuminati = celebIlluminati.filter(Illuminatix => Illuminatix.member === true)

// console.log(Illuminati)

//5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

// const OldEnoughMatrix = ([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])

// const matrixFam = OldEnoughMatrix.filter(x => x.age > 18)

// console.log(matrixFam)
