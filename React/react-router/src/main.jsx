import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Characters from './pages/Characters'
import Character from './pages/Character'
import NotFound from './pages/NotFound'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/" >
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Home />}/>
          <Route path="Characters" element={<Characters />}/>
          <Route path="/Character/:id" element={<Character />}/>
          <Route path="About" element={<About />}/>
          <Route path="*" element={<NotFound/>}>
         </Route>
        </Route> 
     </Routes>
    </BrowserRouter>  
  </React.StrictMode>
)
