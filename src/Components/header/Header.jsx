import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ pathname }) {
    const homeRef = useRef(null);
    const prRef = useRef(null);
    const contRef = useRef(null);

    useEffect(() => {
        switch (pathname) {
            case ('projects'):
                homeRef.current.className = 'Header__Link';
                contRef.current.className = 'Header__Link'
                prRef.current.className = 'Header__Link--highlighted'
                break;
            case ('contacts'):
                homeRef.current.className = 'Header__Link';
                contRef.current.className = 'Header__Link--highlighted';
                prRef.current.className = 'Header__Link';
                break;
            default:
                homeRef.current.className = 'Header__Link--highlighted';
                contRef.current.className = 'Header__Link'
                prRef.current.className = 'Header__Link';
                break;
        }
    }, [pathname])

    return (
        <header className='Header'>
            <nav className='HeaderNav'>
                <h3 className='HeaderNav_h3'>My portfolio</h3>
                <ul className='HeaderNav__ul' >
                    <li>
                        <Link ref={homeRef} className='Header__Link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link ref={prRef} className='Header__Link' to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link ref={contRef} className='Header__Link' to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header