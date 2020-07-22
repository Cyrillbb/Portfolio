import React from 'react';
import './ButtonLink.css';

function ButtonLink({ link, name }) {
    return (
        <a className='ButtonLink' href={link} target='_blank' rel='noopener noreferrer'>{name}</a>
    )
}

export default ButtonLink