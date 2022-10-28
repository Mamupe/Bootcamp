import React from "react";
//import CharacterDetail from "./CharacterDetail";
import { Link, Outlet } from 'react-router-dom'
export const CharacCard = (props) => {
  // sepodría simplificar así: export const Card = ({character}). (se hace destructuring directamente en el paréntesis y no haria falta el paso siguiente ( const {character} = props;))
  const { character } = props;

  return (
    <Link to={`/Character/${character.char_id}`}>
     
      <div>
        <img src={character.img} alt={character.name}></img>
        <h2>Name: {character.name}</h2>
        <h3>Ninck name: {character.nickname}</h3>
        <p>Status: {character.status}</p>
      </div>
    </Link>
    
  );
};
