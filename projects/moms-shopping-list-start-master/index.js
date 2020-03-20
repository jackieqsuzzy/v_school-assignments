const toDoForm = document.addItem;
toDoForm.addEventListener("submit", function (e){
    e.preventDefault ()
    console.log(toDoForm.input1.value)
// DOM Manipulation
// 1. creat or select the new items (lines 9 & 10)

    const newLi = document.createElement("li")
    const newDiv = document.createElement("div")
    const deleteButton = document.createElement("button")
    

//  2. Edit the elements 
    newDiv.textContent = toDoForm.input1.value
    deleteButton.textContent = "delete"
    deleteButton.addEventListener("click", function(){
        newLi.remove()
    })
//  3. append the elements to the DOM
    newLi.appendChild(newDiv)
    document.getElementById('list').appendChild(newLi)
    newLi.appendChild(deleteButton)
})








