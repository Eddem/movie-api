import React, { Component } from 'react';
import { render } from "react-dom";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

// import Router from './App.jsx';
// import Results from './Results.jsx';

//Api reaquest
import Request from 'superagent';
import _ from 'lodash';

import Index from '../index.jsx';

//css
import '../css/style.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
        
        // Alle gegevens voor de details worden opgeslagen in properties
        this.state = {
            key: "8ff486de926af1dcde1f80cd213d9fc0",
            movieId: this.props.id,
            title: this.props.title,
            movieDetails: this.props.name
        };

        // De methodes moeten opnieuw geladen worden (geüpdate) wanneer er een nieuwe film is aan geklikt
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
    }

    componentWillUpdate(nextProps, nextState){

        // Update de states (properties) naar de nieuwe gegevens die bekend zijn over de film waarop geklikt is
        
        var newID = nextProps.id;
        var newTitle = nextProps.title;
        var newMovieDetails = nextProps.movieDetails;
        
        nextState.movieId = newID;
        nextState.title = newTitle;
        nextState.movieDetails = newMovieDetails;

    }


    render() {

        let movieDetails = this.state.movieDetails;
        

        // Elke detail van de details wordt opgehaald en gereturned waarna die opgeslagen wordt in een variabele
        var details = _.map(movieDetails, (detail) => {
            return <p>{detail.overview}</p>

        });

        return (
            
            // Elke filmtietel wordt getoond 
            // Elke detail per film wordt getoond 
                <div className="details">
                    <h1>Details</h1>
                    {this.state.title}      
                    <p>overview: </p>
                    {this.state.details} 
                    {details}
                </div>
        );

    }

}

export default Details;



