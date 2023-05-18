import React from "react";

import "../assets/css/galeria.css";
import Card from './Card'
import FotosContext from "./Context";
import {useContext} from "react";
import useData from "../hook/useData";

export default function Home() {

  const { data } = useData()
  const { favorites, setFavorites } = useContext( FotosContext )


  const handleFavorites = ( id ) => {
    const newFavorites = favorites.some( favorite => favorite.id === id )
      ? favorites.filter( favorite => favorite.id !== id )
      : [...favorites, data.find( image => image.id === id )]

    setFavorites( newFavorites ) 
  }

  return (
    <div className="galeria">
      { data.map( image => (
        <Card
          key={ image.id }
          id={ image.id }
          src={ image.src }
          alt={ image.alt }
          liked={ favorites.some( favorite => favorite.id === image.id ) } 
          handleFavorites={ handleFavorites }

        />
      ) ) }
    </div>
  )
}
