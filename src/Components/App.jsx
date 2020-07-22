import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css'
import Home from './home/Home';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';

function App() {
    const [path, setPath] = useState('');
    let location = useLocation();
    useEffect(() => {
        setPath(location.pathname.slice(1));
    }, [location])
    return (
        <div className='App'>
            <Header pathname={path} />
            <Switch>
                <Route exact path='/Portfolio'>
                    <Home />
                </Route>
                <Route exact path='/Portfolio/projects'>
                    <Projects />
                </Route>
                <Route exact path='/Portfolio/contacts'>
                    <Contacts />
                </Route>
            </Switch>
        </div>

    )
}

export default App