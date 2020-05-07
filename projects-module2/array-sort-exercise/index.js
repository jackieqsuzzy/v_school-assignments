
//1) Sort an array from smallest number to largest

// const arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => a - b);

// console.log(arr)

//2) Sort an array from largest number to smallest

// const arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => b - a)

// console.log(arr)

//3) Sort an array from shortest string to longest


// const lengthSort = ["dog", "wolf", "by", "family", "eaten"]

// lengthSort.sort((a, b) => a.length - b.length)

// console.log(lengthSort)

//4) Sort an array alphabetically

// const alphabetically = ["dog", "wolf", "by", "family", "eaten"]

// alphabetically.sort((a, b) => a.localeCompare(b))

// console.log(alphabetically)

//5) Sort the objects in the array by age

const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

byAge.sort((a, b) => a.age - b.age)

console.log(byAge)


