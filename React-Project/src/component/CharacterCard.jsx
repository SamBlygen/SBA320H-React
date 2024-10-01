import React from "react";

const CharacterCard =({character}) =>{
  return(
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>House:{character.house}</p>
      <img src={character.image} alt = {character.name}/>

    </div>
  )
}

export default CharacterCard;