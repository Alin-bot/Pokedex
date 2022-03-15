import './Pokemon.css';
import ErrorPage from '../ErrorPage/ErrorPage'

import { useParams } from 'react-router-dom'

function Pokemon() {

  const { pokemonId } = useParams();

  if (pokemonId < 1 || pokemonId > 999 || isNaN(pokemonId)) {
    console.log(pokemonId)
    return <ErrorPage/>
  } 

  return (
    <div >
      Pokemon description page..
    </div>
  );
}

export default Pokemon;
