import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Search from './Search.jsx';
import Results from './Results.jsx';
import Details from './Details.jsx';

const App = () => (
    <BrowserRouter>
        <div className="container">
        <Route exact path="/" component={Search} />
        <Route path="/results" component={Results} />
        <Route path="/details" render={ () => <Details title="hello world"/> } />
        </div>
    </BrowserRouter>
);

export default App;