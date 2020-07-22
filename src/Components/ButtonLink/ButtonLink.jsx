import React from 'react';
import './ButtonLink.css';

function ButtonLink({ link, name }) {
    return (
        <a className='ButtonLink' href={link}>{name}</a>
    )
}

export default ButtonLink