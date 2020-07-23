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
                liveLink='https://simple-anime-searcher.herokuapp.com/SimpleAnimeSearch'
                desc1='Responsive anime searcher app built with express, mongoose, react and redux, with jwt-auth.'
                desc2="This app uses kitsu api as an anime database and my own api that links comments to a specific anime title, creates and manages accounts with jwt-auth and stores user's favorites to mongoDB."
            />
            <Card cardName={'Simple chat app'}
                img={ChatImg}
                link={'https://github.com/Cyrillbb/SimpleChatServer'}
                liveLink='https://cyrils-simple-chat.herokuapp.com/'
                desc1='Chat app built with express, mongoose, socket.io, react and redux.'
                desc2='The goal for this app was to create a chat with direct messages between users online and also for users to be able to create their own rooms. 
                    This app is also responsive.'
                desc3='For testing purposes you can use these two accounts: "test" with password "test" and "test1" with password "test1". Or you can create your own accounts. 

                    If you want to share an image with a user or a room you can send a link to an image, if the link has one of the following extensions at the end: png, jpg, jpeg, gif.'
            />
            <Card cardName={'Web page about space'}
                img={SpaceImg}
                link={'https://github.com/Cyrillbb/SpaceStuff'}
                liveLink='https://cyrillbb.github.io/SpaceStuff/'
                desc1='Responsive web app about space stuff built with react.js.' />
        </section>
    )
}

export default Projects