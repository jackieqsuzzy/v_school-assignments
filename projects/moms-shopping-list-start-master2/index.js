const toDoForm = document.addItems
toDoForm.addEventListener("submit", function (e){
    e.preventDefault ()
    console.log(toDoForm.input1.value)


    const newLi = document.createElement("list")
    const newDiv = document.createElement("div")
    const deleteButton = document.createElement("button")

    newDiv.textContent = toDoForm.input1.value
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", function(){
        newLi.remove()
    })
    newLi.appendChild(newDiv)
    document.getElementById("list").appendChild(newLi)
    newLi.appendChild(deleteButton)
})

// DOM Manipulation
// 1. creat or select the new items (lines 9 & 10)

//  2. Edit the elements 

//  3. append the elements to the DOM
