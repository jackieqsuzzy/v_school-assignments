//1) Turn an array of numbers into a total of all the numbers

// const nums = [1, 2, 3, 4, 5, 6, 7, ,8]

// const totalNums = nums.reduce(function(final, num){
//     final += num
//     return final
// })
// console.log(totalNums)

// 2) Turn an array of numbers into a long string of all those numbers.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = nums.reduce(function (final, num){
//     return nums + ' ';
// }, '');

// console.log(result)

// 3) Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const numOfVotes = voters.reduce(function(final, voter){
//     if (voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(numOfVotes)

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalPrice = wishlist.reduce(function (final, num){
//     final += num.price
//     return final
// }, 0)

// console.log(totalPrice)

//5) Given an array of arrays, flatten them into a single array

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// var flatten = arrays.reduce(function (final, array){
//     return final.concat(array);
// }, [])

// console.log(flatten)

//6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


function voterResults (arr){
const sortedByAge = voters.reduce(function (result, voter){
    if (voter.age > 17 && voter.age < 26){
        result.youngVotes++
        if (voter.voted){
            result.youth++
        }
    } else if (voter.age > 26 &&  voter.age < 36){
        result.midVotes++
        if (voter.voted){
            result.middleAge++
        }
    } else if(voter.age > 36 && voter.age < 55){
        result.oldVotes++
        if (voter.voted){
            result.oldies++
        }
    }
 return result
 
},{youth: 0, youngVotes: 0, middleAge: 0, midVotes: 0, oldies: 0, oldVotes: 0})
return sortedByAge
}

console.log(voterResults(voters))
