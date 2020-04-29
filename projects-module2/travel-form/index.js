const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const checkedInputs = []
    for (let i = 0; i < form.food.length; i++){
        if(form.food[i].checked){
        checkedInputs.push(form.food[i].value)
        }
    }
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value
    const food = form.food.value
alert(
`   First name: ${firstName} 
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${location}
    Dietary Restrictions: ${checkedInputs}`)
})

console.log(form.location.value)