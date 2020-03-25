var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var indexOrange = fruit.indexOf("orange")
console.log(indexOrange)

var addNumFruit = fruit.push("1")
console.log(fruit)

vegetables.length;
console.log(vegetables.length)

var addNumVeg = vegetables.push("3")
console.log(vegetables)

var food = fruit.concat(vegetables);
console.log(food)

var newFood = food.splice(4, 2);
console.log(newFood)

var reverseFood = food.reverse();
console.log(food)

var stringFood = food.toString();
console.log(stringFood)

