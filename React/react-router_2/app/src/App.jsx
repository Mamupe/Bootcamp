import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Componentes/Nav";
import React from 'react'

function App() {
  return (
    <div className="App">
      <header>
      BB App
      </header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
