import React from 'react';
import './Projects.css'
import SearcherImg from '../../assets/Searcher.png';
import ChatImg from '../../assets/chat.png';
import SpaceImg from '../../assets/SpaceStuff.png';
import Card from './Card/Card';

function Projects() {    

    return (
        <section className='Projects'>
           <Card cardName={'MERN Anime Searcher app'} img={SearcherImg} />
           <Card cardName={'Simple chat app'} img={ChatImg} />
           <Card cardName={'Web page about space'} img={SpaceImg} />
        </section>
    )
}

export default Projects