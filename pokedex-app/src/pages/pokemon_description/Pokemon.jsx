import './Pokemon.css';
import ErrorPage from '../ErrorPage/ErrorPage'
import Title from '../../components/TItle/Title';

import { useParams } from 'react-router-dom'

function Pokemon() {

  const { id } = useParams();

  if (id < 0 || id > 999 || isNaN(id)) {
    return <ErrorPage/>
  } 

  return (
    <div className = "pokemon-details">
      <Title>Pokedex</Title>

      Pokemon description page.. {id}
    </div>
  );
}

export default Pokemon;
