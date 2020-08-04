import React, {Component} from 'react';
import './App.css';



class App extends Component {
      constructor(props){
        super(props)
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          country: "",
          items: [],
          isSubmitted: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);


    
}

handleChange(event) {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? 
      this.setState({
          [name]: checked
      })
  :
  this.setState({
      [name]: value
  }) 

}

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    })
  }



  render() {
    return (
      <main>
          <form onSubmit={this.handleSubmit}>
              <input
                  name = "firstName"
                  value = {this.state.firstName}
                  onChange = {this.handleChange}
                  placeholder = "First Name"
              />
              <br />
              <input 
                  name = "lastName"
                  value = {this.state.lastName}
                  onChange = {this.handleChange}
                  placeholder = "Last Name"
              />
              <br />
              <input 
                name = "age"
                value = {this.state.age}
                onChange = {this.handleChange}
                placeholder = "Age"
              />
              <br />
              <select 
                value = {this.state.country}
                name = "country"
                onChange = {this.handleChange}
              >
                <option value="">-- Please Choose a destination --</option>
                <option value= "Norway">Norway</option>
                <option value= "Austrailia">Austrailia</option>
                <option value= "Germany">Germany</option>
                <option value= "Costa Rica">Costa-Rica</option>
              </select>
              <br />
              <button>Submit</button>
          </form>
          <hr />
          <h1>Entered Information</h1>
          <h2>First Name: {this.state.firstName}</h2>
          <h2>Last Name: {this.state.lastName}</h2>
          <h2>Your Age: {this.state.age}</h2>
          <h2>Your Country: {this.state.country}</h2>
          
      </main>
    )
  }
}



export default App;
