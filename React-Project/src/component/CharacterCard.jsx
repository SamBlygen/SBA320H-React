import React, { useState, useEffect } from 'react';

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(storedFavorites.includes(character.name));
  }, [character.name]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (storedFavorites.includes(character.name)) {
      const updatedFavorites = storedFavorites.filter(fav => fav !== character.name);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      storedFavorites.push(character.name);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(true);
    }
  };

  if(!character.image || !character.house){
    return null;
  }

  return (
    <div className="character-card">
    <h2>{character.name}</h2>
    <p><strong>House:</strong> {character.house}</p>
    {character.alias && <p><strong>Alias:</strong> {character.alias}</p>}
    <p><strong>Gender:</strong> {character.gender}</p>
    

    <img src={character.image} alt={character.name} />

    {character.wand && (
      <p>
        <strong>Wand:</strong> {character.wand.wood ? `Wood: ${character.wand.wood}` : ''}
        {character.wand.core ? `, Core: ${character.wand.core}` : ''}
        {character.wand.length ? `, Length: ${character.wand.length}` : ''}
      </p>
    )}
   <button
        className={`Favorite ${isFavorite ? 'favorited' : ''}`} // Toggle class based on isFavorite
        onClick={toggleFavorite}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
  </div>
);
};

export default CharacterCard;
