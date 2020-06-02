import React, { Component } from 'react';
import Decrement from "./Decrement";
import './App.css';


class App extends Component {
  render(){
    return (
      <div>
           <Decrement start={5} />
           <br></br>
           <Decrement start={15} />
           <br></br>
           <Decrement start={25} />
           <br></br>
     </div>
    )
  }
}
  


export default App;

