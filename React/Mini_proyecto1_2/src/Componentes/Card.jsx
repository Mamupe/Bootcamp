import React from "react";

export const Card = (props) => {
    const {character} = props;

return (
    <div>
        <img src={character.image} alt={character.name}></img>
        <h3>name: {character.name}</h3>
        <p>satatus: {character.status}</p>
    </div>
)

};
