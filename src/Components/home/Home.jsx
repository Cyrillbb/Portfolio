import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <section className="Home">
            <h2 className='Home__h2'>Hello,  my name is Kirill Baryshnikov. I am a passionate <span className='Home__span'>front-end</span> developer.</h2>
            <h3 className='Home__h3'>My skills</h3>
            <ul className='Home__ul'>
                <li className="list-group-item">HTML5</li>
                <li className="list-group-item">CSS3, SCSS</li>
                <li className="list-group-item">JavaScript(ES6+)</li>
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">Redux</li>
                <li>Jest</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express.js</li>
                <li className="list-group-item">Socket.io</li>
                <li className="list-group-item">Webpack</li>
            </ul>            
            <Link className='Home__Link' to='/Portfolio/projects'>My projects <i className="fas fa-arrow-right"></i></Link>
            <Link className='Home__LinkCont' to='/Portfolio/contacts'>My contacts <i className="fas fa-arrow-right"></i></Link>
        </section>
    )
}

export default Home