import React from 'react';
import './Title.css';

function Title({ children }) {
  return <h1 className="title-text">{children}</h1>;
}

export default Title;