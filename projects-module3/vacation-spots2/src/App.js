import React from "react"
import VacationSpots from " ./VacationSpots"
import Carddddd from "./Card.js"

function App(){
    const VacationPlaces = VacationSpots.map(vacation => <Vacation key= {vacation.id} place = {vacation.place} price ={vacation.price} timeToGO = {vacation.timeToGO} />)
        return (
            <div>
                <p>{VacationPlaces}</p>
                
            </div>
    )
}

export default App
