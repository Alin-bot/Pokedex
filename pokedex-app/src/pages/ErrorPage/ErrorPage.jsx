import './ErrorPage.css';

import { Link } from 'react-router-dom'
import snorlax from '../../resources/snorlax.png'
import pokeflute from '../../resources/pokeflute.png'

function ErrorPage() {

  return (
    <div className = "error-page">
      <div>
        <div>Hi! I'm Snorlax. I'm blocking the path.</div>
        <img src = {snorlax} alt="snorlax" style = {{height: "400px", margin: "40px"}}/>
        <div>
          Click {' '}
          <Link to="/home" style = {{"text-decoration": "none"}}>
          here
          </Link>
          {' '} to go back! {' '}
          <img src = {pokeflute}  alt="pokeflute" style = {{height: "15px"}}/>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;