
import './App.css';
import React from 'react';
import './Circle.css'; 



function App() {
  let circle = {
    color: 'yellow',
   
  };
 
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="circle"></div>
        <p>
        <div class="name">{circle.color}</div>
        </p>
        <div className="button-container">
        <button className="circle-button">Button 1</button>
        <button className="circle-button">Button 2</button>
      </div>
      
        
        
      </header>
    </div>
  );
}

export default App;

