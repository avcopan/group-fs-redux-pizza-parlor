import React from 'react';
import { getPizzas } from "../../modules/pizza.request";
import './App.css';

function App() {

  getPizzas().then(console.log);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;