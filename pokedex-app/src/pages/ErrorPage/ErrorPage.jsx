import './dist/ErrorPage.css';

import { Link } from 'react-router-dom'
import snorlax from '../../resources/snorlax.png'
import pokeflute from '../../resources/pokeflute.png'

function ErrorPage() {

  return (
    <div className = "error-page">
      <div>
        <div>Hi! I'm Snorlax. I'm blocking the path.</div>

        <img src = {snorlax} className = "snorlax" alt="snorlax"/>

        <div>
          Click {' '}
          <Link to="/home" className = "link">
          here
          </Link>
          {' '} to go back! {' '}
          
          <img src = {pokeflute} className = "pokeflute" alt="pokeflute"/>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;