import React from 'react';

import './Layout.css'

function Layout({ children }) {
    return (
        <div className='wrapper'>
            <div className='content-wrapper'>
                { children }
            </div>
        </div>
    );
}

export default Layout;