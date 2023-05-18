import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"
import FotosContext from "./components/Context"
import { useState } from 'react'

export default function App () {
  const [favorites, setFavorites] = useState( [] )
  const favoriteState = { favorites, setFavorites }




  return (
    <div className="App">
      <FotosContext.Provider value={ favoriteState }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/favoritos" element={ <Favoritos /> } />
          </Routes>
        </BrowserRouter>
      </FotosContext.Provider>
    </div>
  );
}