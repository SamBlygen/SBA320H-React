import React, { useEffect, useState } from "react";

const CharacterCard =({character}) =>{
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    const storedFavorites =JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(storedFavorites.includes(character.name));
  }, [character.name]);
  
  const toggleFavorite =() =>{
    const storedFavorites =JSON.parse(localStorage.getItem('favorites')) || [];
    if (storedFavorites.includes(character.name)){
      const updatedFavorites =storedFavorites.filter(fav => fav !== character.name);
      localStorage.setItem('favorites',JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else{
      storedFavorites.push(character.name);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(true);
    }
  };

  return(
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>House:{character.house}</p>
      <img src={character.image} alt = {character.name}/>
<button onClick={toggleFavorite}>
  {isFavorite ? 'Unfavorite': 'Favorite'}
</button>
    </div>
  )
}

export default CharacterCard;