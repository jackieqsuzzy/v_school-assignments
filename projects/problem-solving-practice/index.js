// function findLargestNum(arr){
//     var biggestNum = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > biggestNum) {
//             biggestNum = arr[i]
//         }
//     }
//     return biggestNum;
// }

// console.log(findLargestNum([5, 8, 9, 2, 1]))


var array = ["#3", "$$$", "C%4!", "Hey!"];
var emparray = []
function findCharacter(array, character){
    for (var i = 0; i < array.length; i++) {
        if(array[i].includes(character)){
            array[i].concat(emparray);
        }
    } 
}
console.log(findCharacter(array, "!"))