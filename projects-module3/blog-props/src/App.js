import React from 'react';
import './App.css';
import BlogList from "./BlogList"
import NavBar from "./NavBar"
import HeroImg from "./HeroImg"
import Pager from "./Pager"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroImg />
      <BlogList /> 
      <Pager />
      <br></br>
      <Footer />
     
    </div>
  );
}



export default App;
