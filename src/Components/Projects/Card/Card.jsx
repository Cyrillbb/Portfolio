import React from 'react';
import './Card.css'
import ButtonLink from '../../ButtonLink/ButtonLink';

function Card({ img, link, cardName }) {
    return (
        <div className='Card'>
            <p style={{fontSize: 'larger'}}>{cardName}</p>
            <img className='Card__img' src={img} alt="" />
            <div className='Card__div'>
                <div className='Card__div__div'>Check github readme for description and link to the live demo.</div>
                <ButtonLink name={'Github'} link={link} />
            </div>
        </div>
    )
}

export default Card