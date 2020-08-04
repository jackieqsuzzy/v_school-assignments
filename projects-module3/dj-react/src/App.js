import React from 'react';
import './App.css';
import Square from "./Square"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: [
        "white",
        "white",
        "white",
        "white"
      ]
    }
  }

changeColor = () => {
  this.setState(prevState => {
    const newColors = prevState.colors.map(color => {
      if (prevState.colors[0] !== "black"){
        return "black"
        }else {
        return "white"
      }
    })
    return {colors: newColors}
  })
}
changePurp = () => {
  this.setState(prevState => {
    return {
      colors:["purple", "purple", prevState.colors[2], prevState.colors[3]]
      }
   })
}

changeBlue = () => {
  this.setState(prevState => {
    return {
      colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
    } 
  })
}
changeBlue2 = () => {
  this.setState(prevState => {

    return {
      colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
    } 
  })
}

render() {
  const squares = this.state.colors.map(color => <Square color = {color}/>)
  return (
      <div className = "squareContainer">
          {squares}
          <button className = "firstBtn" onClick={this.changeColor}>White</button>
          <button className = "secondBtn" onClick={this.changePurp}>purple</button>
          <button className = "thirdBtn" onClick={this.changeBlue}>blue</button>
          <button className = "fourthBtn" onClick={this.changeBlue2}>blue2</button>
          
          {/* <Square color={this.state.colors[0]}/>
          <Square color={this.state.colors[1]}/>
          <Square color={this.state.colors[2]}/>
          <Square color={this.state.colors[4]}/> */}
        
      </div>
    )
  }

}

export default App 