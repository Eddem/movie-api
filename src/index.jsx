import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter, Route, Link} from 'react-router-dom';

import App from './components/App.jsx';

import './css/style.css';

render(<App/>, document.getElementById('root'));