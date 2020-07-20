import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='Header'>
            <nav className='HeaderNav'>
                <h3 className='HeaderNav_h3'>My portfolio</h3>
                <ul className='HeaderNav__ul'>
                    <li>
                        <Link className='Header__Link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='Header__Link' to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className='Header__Link' to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header