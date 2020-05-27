
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

// function collectAnimals(...addedAnimals) {  
//     console.log(addedAnimals)
// }

// collectAnimals("tiger", "hipo")

// const combined = (fruit, sweets, veggies) => ({fruit, sweets, veggies})

// console.log(combined(["apple", "pear"],
// ["cake", "pie"],
// ["carrot"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };

// const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`

// console.log(parseSentence(vacation))




// const returnFirst = ({firstItem}) => firstItem === items[0]

// console.log(returnFirst(firstItem))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// const [firstFav, secondFav, thirdFav] = favoriteActivities

// const returnFavorites = ({arr}) => `My top three favorite activities are ${firstFav}, ${secondFav} & ${thirdFav}`

// console.log(returnFavorites(favoriteActivities))


// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = [...realAnimals,...magicalAnimals,"platypus"];


// // console.log(mysteriousAnimals)

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

console.log(product(numbers))