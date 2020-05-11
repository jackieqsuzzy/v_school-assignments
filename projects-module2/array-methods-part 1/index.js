const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedOfAge(arr){
    const olderThan18 = peopleArray.filter(x => x.age > 18)
    olderThan18.sort((a, b) => a.lastName.localeCompare(b.lastName))
    const list = olderThan18.map(olderThan18 => `<li> ${olderThan18.firstName} ${olderThan18.lastName} is ${olderThan18.age} </li>`)
    return list
 }

console.log(sortedOfAge(peopleArray))

