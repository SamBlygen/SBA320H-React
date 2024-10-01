import React from "react";
import CharacterCard from './CharacterCard'
import { Carousel } from 'react-responsive-carousel';

 const CharacterList =({characters})=>{
  return(
    <div className="character-list">
      <Carousel showArrows={true} showThumbs={false} autoPlay={true}>
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
      </Carousel>
    </div>
  )
}

export default CharacterList;