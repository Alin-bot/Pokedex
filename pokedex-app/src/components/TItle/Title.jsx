import React from 'react';
import './dist/Title.css';

import { Link } from 'react-router-dom'

function Title({ children }) {
  return (
    <Link to = '/home' style = {{"text-decoration": "none"}}>
      <h1 className="title-text">{children}</h1>
    </Link>
  )
}

export default Title;