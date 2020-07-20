import React from "react"

function PetContainer(props){
    return (
        <div>
            <h2>Pets Names: {props.name}</h2>
            <h2>Breed: {props.breed}</h2>
        </div>
    )
}


export default PetContainer 