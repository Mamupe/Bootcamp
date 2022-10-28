import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h2>Home Page</h2>
        <p>BIENVENIDO A LA API DE LA MEJOR SERIE EVER</p>
        <span>Clica aquí para ver a tus personajes favoritos:</span>
        <Link to= "characters">Personajes</Link>
    </>
  )
}

export default Home