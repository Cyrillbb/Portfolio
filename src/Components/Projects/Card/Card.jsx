import React from 'react';
import './Card.css'
import ButtonLink from '../../ButtonLink/ButtonLink';

function Card({ img, link, cardName, liveLink, desc1, desc2, desc3 }) {
    return (
        <div className='Card'>
            <div className='Card__div'>
                <p style={{ fontSize: 'larger' }}>{cardName}</p>
                <ButtonLink name={'Github'} link={link} />
            </div>
            <a href={liveLink} target='_blank' rel='noopener noreferrer'>
                <img className='Card__img' src={img} alt="" />
            </a>

            <ul className='Card__ul'>
                <li className='Card__li'>{desc1}</li>
                <li className='Card__li'>{desc2}</li>
                <li className='Card__li'>{desc3}</li>
            </ul>


        </div>
    )
}

export default Card