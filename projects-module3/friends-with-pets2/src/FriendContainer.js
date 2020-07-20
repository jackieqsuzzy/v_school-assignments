import React from "react"
import PetContainer from "./Pet.js"


function friendContainer(props){
    const pets = props.pets.map(pet => <Pet name = {pet.name} breed = {pet.breed}/>) 

    return (
        <div className = "friendContainer">
            <h2>Human Friend: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            

         {pets}          
        </div>
    )


}

export default friendContainer