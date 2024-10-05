import { useState, useEffect } from 'react';
import CharacterList from './component/CharacterList';
import FavoriteCharacters from './component/FavoriteCharacters'; 
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();
console.log(data);
        setCharacters(data);
      } catch {
        console.log('Error fetching characters');
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1>⚡🧙Harry Potter Characters🧙⚡</h1>
      <CharacterList characters={characters} />
      <FavoriteCharacters />
    </div>
  );
}

export default App;

