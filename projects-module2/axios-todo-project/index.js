const toDoList = document.getElementById("allToDos")

axios.get("https://api.vschool.io/jackiesw/todo").then (response => {
    const todoList = response.data 
    
    for (let i = 0; i < todoList.length; i++){
        makeToDo(todoList[i])

    }
})
.catch(err => console.log(err))

function makeToDo(toDo) {
        const todoContainer = document.createElement("div")
        const title = document.createElement("h1")
        const description = document.createElement("p")
        const img = document.createElement("img")
        const delBtn = document.createElement("button")
        const checkBox = document.createElement("input")

        title.textContent = toDo.title
        description.textContent = toDo.description
        img.src = toDo.imgUrl
        img.classList.add("img-styles")
        todoContainer.classList.add("todo-container")
        delBtn.textContent = "Delete"
        checkBox.type = "checkbox"

        delBtn.addEventListener("click", () =>{
            deleteToDo(toDo._id)
            todoContainer.remove()
            console.dir(delBtn)
        })
        
        if(toDo.completed) title.classList.add("completed"); checkBox.checked = toDo.completed

        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(img)
        document.getElementById("allToDos").appendChild(todoContainer)
        todoContainer.appendChild(delBtn)
        todoContainer.appendChild(checkBox)


        checkBox.addEventListener("change", () => {
            const id = toDo._id
            axios.put("https://api.vschool.io/jackiesw/" + id, {completed: checkBox.checked}).then(response => {
                console.log(response.data)
            })
            if(checkBox.checked){
                title.classList.add("completed")
            } else {
                title.classList.remove("completed")
            }
            editToDo(toDo._id, {completed: checkBox.checked})
        })
}

// write a submit event listener for the form
document.getElementById("toDoAdd").addEventListener("submit", e => {
    e.preventDefault()
    console.log(document.addToDo.title.value)
    const newToDo = {
        title: document.addToDo.title.value,
        description: document.addToDo.description.value,
        imgUrl: document.addToDo.img.value
        
    }
    axios.post("https://api.vschool.io/jackiesw/todo", newToDo).then (response => {
        makeToDo(response.data)
    })
})

// checkBox.addEventListener("change", () => {
//     const id = toDo._id
//     if(checkBox.checked){
//         title.classList.add("completed")
//         editToDo(toDo._id, {completed: true})
//     } else {
//         title.classList.remove("completed")
//         editToDo(toDo._id, {completed: false})
//     }
// })


function deleteToDo(id){
    axios.delete("https://api.vschool.io/jackiesw/todo/" + id).then(response => {
        console.log(response)
    })
}




