import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const characters = useSelector((state) => state.character.characters);
  const { characterId } = useParams();

  const selectedCharacter = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <div>
      <div key={selectedCharacter.id}>
        <img src={selectedCharacter.image} alt="img" />
        <p>Status: {selectedCharacter.status}</p>
        <p>Id: {characterId}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
