import React from "react"

function Card(props){
    console.log(props.card)
    return (
        
        <div>
            <h2>Places: {props.place}</h2>
            <p>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            - {props.description}</p>

        </div>
    )
}

export default Card