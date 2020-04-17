import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Womens World Cup Players List!</h1>
      </div>
      <div className='playercard-container'>
        <PlayerCard />
      </div>
    </div>
  );
}

export default App;
