import React from 'react';
import Header from '../../components/header/header.component';

const Layout = ({showHeader, children}) => {

    return (
        <div className="layout">  
            {showHeader && <Header />}
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export default Layout;