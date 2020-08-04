import React from "react"
import "./index.css"

function DiceBox(props) {
    return (
        <div style = {{backgroundColor: props.color}} className = "die1">
            {props.die}
        </div>
    )
}



export default DiceBox