import { useState } from 'react'
import CharacterList from  './component/CharacterList'

function App() {
  const [characters, setCharacters]= useState([]);

  useEffect(()=>{
    const fetchCharacters = async ()=>{
      try{
        const response = await fetch ('https://hp-api.onrender.com/api/characters');
        const data = await response.json();
        setCharacters(data);
      }catch {
console.log('error fetching character')
      }
    };
    fetchCharacters();
  },[]);
  return(
    <div className='App'>
      <h1>Harry Potter Characters</h1>
      <CharacterList characters={characters}/>
      
    </div>
 ); 
}

export default App
