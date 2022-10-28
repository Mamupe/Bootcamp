import React from "react";

export const Card = (props) => { // sepodría simplificar así: export const Card = ({character}). (se hace destructuring directamente en el paréntesis y no haria falta el paso siguiente ( const {character} = props;))
    const {character} = props;

return (
    <div>
        <img src={character.image} alt={character.name}></img>
        <h3>name: {character.name}</h3>
        <p>satatus: {character.status}</p>
    </div>
)

};
