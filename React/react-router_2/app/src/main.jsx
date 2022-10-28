import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Personajes from "./Pages/Personajes";
import Personaje from "./Pages/Personaje";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="personajes" element={<Personajes />} />
        <Route path="personajes/:id" element={<Personaje />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
