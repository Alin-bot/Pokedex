import React from 'react';
import { Link } from 'react-router-dom'

import './Title.css';

function Title({ children }) {
  return (
    <Link to = '/' className='title'>
      <h1 className="title-text">{ children }</h1>
    </Link>
  )
}

export default Title;