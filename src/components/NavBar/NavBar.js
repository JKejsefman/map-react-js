import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <li>Home</li>
                <li>Carrito</li>
                <li>Nosotros</li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;