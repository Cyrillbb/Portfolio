import React from 'react';
import Header from './header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './home/Home';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contacts'>
                        <Contacts />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    )
}

export default App