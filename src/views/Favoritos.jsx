import { useContext } from 'react'
import CardFavs from '../components/CardFavs';
import FotosContext from '../components/Context';


export default function Favoritos () {

  const { favorites } = useContext( FotosContext )

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria-favoritos">
        { favorites.map( image => (
          <CardFavs
            key={ image.id }
            id={ image.id }
            src={ image.src }
            alt={ image.alt }
          /> ) ) }
      </div>
    </div>
  );
}