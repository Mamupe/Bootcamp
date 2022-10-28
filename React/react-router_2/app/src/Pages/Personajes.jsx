import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import PersonajesGallery from '../Componentes/PersonajesGallery';


const Personajes = () => {
const [name, setName] = useState("");
const [img, setImg] = useState("");
const [status, setStatus] = useState ("");
const [nickname, setNickname] = useState ("");
const [personajes, setPersonajes] = useState ([]);

useEffect(() => {
    const getPersonajes = async () => {
        const data = await fetch("http://localhost:8080/personajes");
        const res = await data.json();
        setPersonajes(res);
    }
    getPersonajes();
}, []);

const createPersonaje = (ev) => {
    ev.preventDefault();

    const personaje = {
        name: name,
        img: img,
        status: status,
        nickname: nickname,
    };
    postPersonaje(personaje);
};

const postPersonaje = async (item) => {
    axios({
        method: "post",
        url: "http://localhost:8080/personajes",
        data: item,
    })
}

return (
    <div>
      <form onSubmit={(ev) => createPersonaje(ev)}>
        <fieldset>
          <legend>Crea tu personaje</legend>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(ev) => setName(ev.target.value)}
          />
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={(ev) => setImg(ev.target.value)}
          />
          <label htmlFor="status">Estatus:</label>
          <input
            type="text"
            name="status"
            id="status"
            onChange={(ev) => setStatus(ev.target.value)}
          />
           <label htmlFor="nick">Mote:</label>
          <input
            type="text"
            name="nick"
            id="nick"
            onChange={(ev) => setNickname(ev.target.value)}
          />
        </fieldset>
        <input type="submit" value="Create" />
      </form>
      <PersonajesGallery personajes={personajes} />
    </div>
  );

};



export default Personajes;