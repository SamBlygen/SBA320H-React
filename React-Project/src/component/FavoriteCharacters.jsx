import React, { useState, useEffect } from 'react';

const FavoriteCharacters = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCharacters(storedFavorites);
  }, []);

  return (
    <div className="favorites-list">
      <h3>🪄Favorite Characters🪄</h3>
      {favoriteCharacters.length > 0 ? (
        favoriteCharacters.map((characterName) => (
          <div key={characterName}>
            <p>{characterName}</p>
          </div>
        ))
      ) : (
        <p>No favorite characters yet!</p>
      )}
    </div>
  );
};

export default FavoriteCharacters;
