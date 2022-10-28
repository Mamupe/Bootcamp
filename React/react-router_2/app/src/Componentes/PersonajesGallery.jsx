import { Link } from "react-router-dom";
import React from 'react'

const PersonajesGallery = ({ personajes }) => {
    return (
      <div className="PersonajesGallery">
        <h2>Gallery</h2>
        <div className="gallery">
          {personajes.length ? (
            personajes.map((personaje) => (
              <figure key={personaje.id}>
                <Link to={`/personajes/${personaje.id}`}>
                  <img src={personaje.img} alt={personaje.name}></img>                
                  <h3>{personaje.name}</h3>
                </Link>
              </figure>
            ))
          ) : (
            <p>..........</p>
          )}
        </div>
      </div>
    );
  };
  
  export default PersonajesGallery;