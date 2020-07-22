import React from 'react';
import './Projects.css'
import SearcherImg from '../../assets/Searcher.png';
import ChatImg from '../../assets/chat.png';
import SpaceImg from '../../assets/SpaceStuff.png';
import Card from './Card/Card';

function Projects() {    

    return (
        <section className='Projects'>
           <Card cardName={'MERN Anime Searcher app'} 
           img={SearcherImg} 
           link={'https://github.com/Cyrillbb/mernAnimeSearcher'}
           liveLink='https://simple-anime-searcher.herokuapp.com/SimpleAnimeSearch' />
           <Card cardName={'Simple chat app'} 
           img={ChatImg} 
           link={'https://github.com/Cyrillbb/SimpleChatServer'} 
           liveLink='https://cyrils-simple-chat.herokuapp.com/'/>
           <Card cardName={'Web page about space'} 
           img={SpaceImg} 
           link={'https://github.com/Cyrillbb/SpaceStuff'} 
           liveLink='https://cyrillbb.github.io/SpaceStuff/'/>
        </section>
    )
}

export default Projects