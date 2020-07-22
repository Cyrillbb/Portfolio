import React from 'react';
import './Contacts.css'

function Contacts() {
    return (
        <section className='Contacts'>
            <a className='Contacts__i' href="https://github.com/Cyrillbb" target='_blank' rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <span className='Contacts__i'>
                <i className="fas fa-hospital-symbol"></i>
            </span>
            <a className='Contacts__i' href="mailto: kibaryshnikov@yandex.ru">
                <i className="fas fa-at"></i>                
            </a>


        </section>
    )
}

export default Contacts