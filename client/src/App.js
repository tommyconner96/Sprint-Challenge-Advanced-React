import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard'
import DarkButton from './components/DarkButton'

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <div className='header'>
          <h1>Womens World Cup Players</h1>
        </div>
          <DarkButton />
      </div>

      <div className='playercard-container'>
        <PlayerCard />
      </div>
    </div>
  );
}

export default App;
