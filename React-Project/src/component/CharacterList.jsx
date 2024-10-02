import React, { useEffect } from "react";
import CharacterCard from './CharacterCard'




 const CharacterList =({characters})=>{
  return(
    <div className="character-list">
      {characters.map((character) => (
         <div key={character.name}>
         <CharacterCard character={character} />
       </div>
      ))}
  
    </div>
  )
}

export default CharacterList;

const FavoriteCharacters =()=>{
  const [FavoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(()=>{
const storedFavorites =JSON.parse(localStorage.getItem('favorites')) || [];
setFavoriteCharacters(storedFavorites);
  },[]);
  return(
    <div className="favorites-list">
      <h3>Your Favorite Characters</h3>
      {FavoriteCharacters.map((characterName)=>(
       <div key ={characterName}>
        <p>{characterName}</p>
       </div> 
      ))}

    </div>
  )}

FavoriteCharacters;