import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList'



const theSauce = 'https://rickandmortyapi.com/api/character/'


function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <CharacterList/> 
    </div>
  );
}

export default App;
