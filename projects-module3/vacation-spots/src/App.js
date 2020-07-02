import React from 'react';
import './App.css';
import VacationSpots from "./VacationSpots.js"
import Card from "./Card.js"

function App(){
    const vacationPlaces = VacationSpots.map(item => <Card key= {item.id} place = {item.place} price ={item.price} timeToGO = {item.timeToGO} />)
        return (
            <div>
                {vacationPlaces}
              
            </div>
    )
}

export default App
