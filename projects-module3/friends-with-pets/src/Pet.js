import React from "react"

function Pet (props) {
    return (
        <div className = "animalContainer">
            <h2>Animal Name: {props.name}</h2>
            <h2>Breed: {props.breed}</h2>
        </div>
    )
}

export default Pet