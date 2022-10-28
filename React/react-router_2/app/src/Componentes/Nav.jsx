import { NavLink } from "react-router-dom"
import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
      <nav className="Nav">
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="personajes">Personajes</NavLink>
          </li>
          <li>
            <NavLink to="About">About</NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;