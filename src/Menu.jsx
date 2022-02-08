import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <h1>This is Menu PAge</h1>
            <div>
                <Link to="/about">About Page</Link>
                <br />
                <Link to="/service">Srvice Page</Link>
                <br />
                <Link to="/menu">Menu</Link>
                <br />
                <Link to='contact'>Contact Page</Link>

            </div>
        </>
    )
};

export default Menu;
