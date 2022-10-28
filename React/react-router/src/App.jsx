import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


function App() {
  
  return (
    <div className="App">
    <header className="header">
      <h1>BREAKING BAD</h1>
    </header>
    <div>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="characters">Characters</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  </div>
  )
  

}

export default App
