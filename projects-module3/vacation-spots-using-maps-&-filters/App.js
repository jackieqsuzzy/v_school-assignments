import react from "react"
import VacationSpots from " ./VacationSpots"
import Card from "./Card"

function App(){
    const VacationPlaces = VacationSpots.map(vacation => <Vacation key= {vacation.id} place = {vacation.place} price ={vacation.price} timeToGO = {vacation.timeToGO} />)
        return (
            <div>
                <p>{VacationPlaces}</p>
            </div>
    )
}

export default App