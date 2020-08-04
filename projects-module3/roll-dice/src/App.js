import React from 'react';
import './App.css';
import DiceBox from "./DiceBox"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dice: [1, 1, 1, 1, 1, 1]
    }
  }

  handleClick = () => {
    this.setState({ 
      dice: [
          Math.ceil(Math.random() * 6), 
          Math.ceil(Math.random() * 6), 
          Math.ceil(Math.random() * 6),
          Math.ceil(Math.random() * 6),
          Math.ceil(Math.random() * 6),
          Math.ceil(Math.random() * 6)
        ]
      })
  };


render () {
  const dice = this.state.dice.map(die => <DiceBox die = {die}/>)
    return (

      <div className = "diceContainer">
          {dice}
          <button onClick = {this.handleClick}>Click Me</button>
      </div>
    )
  }

}

export default App
